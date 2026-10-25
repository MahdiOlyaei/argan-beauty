export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  {
    id: 'hero-products',
    description: 'Skincare products on stone blocks with pink flower',
    imageUrl: 'https://picsum.photos/seed/beauty-hero/800/1000',
    imageHint: 'skincare perfume',
  },
];
