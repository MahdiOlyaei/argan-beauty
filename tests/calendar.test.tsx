import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Calendar } from '@/components/ui/calendar';

describe('Calendar', () => {
  test('keeps dropdown changes and navigation reachable above the overlay', () => {
    render(
      <Calendar
        captionLayout="dropdown"
        defaultMonth={new Date(2025, 0)}
        startMonth={new Date(2024, 0)}
        endMonth={new Date(2026, 11)}
      />,
    );

    const [monthDropdown] = screen.getAllByRole('combobox') as HTMLSelectElement[];
    expect(monthDropdown).toBeDefined();

    const previousButton = screen.getByRole('button', { name: /previous month/i });
    const nextButton = screen.getByRole('button', { name: /next month/i });
    expect(previousButton.closest('nav')).toHaveClass('pointer-events-none');
    expect(previousButton).toHaveClass('pointer-events-auto');
    expect(nextButton).toHaveClass('pointer-events-auto');

    fireEvent.change(monthDropdown, { target: { value: '5' } });
    expect(monthDropdown).toHaveValue('5');

    fireEvent.click(nextButton);
    expect(monthDropdown).toHaveValue('6');
  });
});
