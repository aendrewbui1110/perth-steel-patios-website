export interface Project {
  id: number;
  type: string;
  title: string;
  location: string;
  image: string;
  aspect: string;
  description: string;
  beforeImage?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    type: 'Gable',
    title: 'Gable Patio',
    location: 'Joondalup',
    image: 'https://picsum.photos/seed/patio1/800/600',
    aspect: 'aspect-[4/3]',
    description:
      'Large gable patio with downlights and ceiling fan over pool area.',
  },
  {
    id: 2,
    type: 'Carport',
    title: 'Double Carport',
    location: 'Fremantle',
    image: 'https://picsum.photos/seed/carport1/800/900',
    aspect: 'aspect-[3/4]',
    description:
      'Double bay carport in Monument grey, matching the home render.',
  },
  {
    id: 3,
    type: 'Flat Roof',
    title: 'Flat Roof Alfresco',
    location: 'Karrinyup',
    image: 'https://picsum.photos/seed/patio2/800/800',
    aspect: 'aspect-square',
    description:
      'Sleek flat roof alfresco seamlessly extending the living space.',
  },
  {
    id: 4,
    type: 'Custom',
    title: 'Freestanding Pergola',
    location: 'Mandurah',
    image: 'https://picsum.photos/seed/gazebo1/800/800',
    aspect: 'aspect-square',
    description:
      'Freestanding steel pergola for a large rear entertaining zone.',
  },
  {
    id: 5,
    type: 'Skillion',
    title: 'Skillion Patio',
    location: 'Osborne Park',
    image: 'https://picsum.photos/seed/shade1/800/600',
    aspect: 'aspect-[4/3]',
    description:
      'Architectural skillion with caf\u00e9 blinds for full weather protection.',
  },
  {
    id: 6,
    type: 'Gable',
    title: 'Dutch Gable Patio',
    location: 'Rockingham',
    image: 'https://picsum.photos/seed/patio3/800/900',
    aspect: 'aspect-[3/4]',
    description:
      'Dutch gable with timber-look lining boards and LED strip lighting.',
  },
  {
    id: 7,
    type: 'Flat Roof',
    title: 'Flat Roof Verandah',
    location: 'Subiaco',
    image: 'https://picsum.photos/seed/patio4/800/600',
    aspect: 'aspect-[4/3]',
    description:
      'Minimalist flat roof wrapping the north-facing elevation.',
  },
  {
    id: 8,
    type: 'Carport',
    title: 'Single Carport',
    location: 'Baldivis',
    image: 'https://picsum.photos/seed/carport2/800/800',
    aspect: 'aspect-square',
    description:
      'Single bay carport in Ironstone \u2014 sturdy and low-maintenance.',
  },
  {
    id: 9,
    type: 'Gable',
    title: 'Gable Patio',
    location: 'Ellenbrook',
    image: 'https://picsum.photos/seed/patio5/800/900',
    aspect: 'aspect-[3/4]',
    description:
      'Full backyard gable covering 55m\u00b2 with Colorbond Woodland Grey.',
  },
];

export const projectTypes: string[] = [
  'All',
  'Gable',
  'Flat Roof',
  'Skillion',
  'Carport',
  'Custom',
];
