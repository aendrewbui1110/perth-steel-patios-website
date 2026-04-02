export interface Service {
  id: number;
  number: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
}

export const services: Service[] = [
  {
    id: 1,
    number: '01',
    title: 'Flat Roof Patios',
    slug: 'flat-roof-patios',
    description:
      'Clean, modern lines that complement contemporary Perth homes. Ideal for tight spaces and maximising usable outdoor area with minimal visual bulk.',
    longDescription: '',
  },
  {
    id: 2,
    number: '02',
    title: 'Gable Roof Patios',
    slug: 'gable-roof-patios',
    description:
      "Perth's most popular style. The peaked roof allows superior airflow and sheds rain effortlessly \u2014 a classic for good reason.",
    longDescription: '',
  },
  {
    id: 3,
    number: '03',
    title: 'Dutch Gable Patios',
    slug: 'dutch-gable-patios',
    description:
      'The best of both worlds \u2014 the aesthetic of a gable with the airflow benefits of a skillion. Great for larger alfresco areas.',
    longDescription: '',
  },
  {
    id: 4,
    number: '04',
    title: 'Skillion Patios',
    slug: 'skillion-patios',
    description:
      'A single-pitch roof with bold architectural appeal. Low-maintenance and perfect for homes where roof height needs managing.',
    longDescription: '',
  },
  {
    id: 5,
    number: '05',
    title: 'Carports',
    slug: 'carports',
    description:
      'Protect your vehicles from the harsh WA sun and storms. Single, double, and triple bay configurations in any Colorbond colour.',
    longDescription: '',
  },
  {
    id: 6,
    number: '06',
    title: 'Dome & Curved Roof',
    slug: 'dome-curved-roof',
    description:
      'A statement structure that sets your property apart. Our curved steel frames create a striking organic form \u2014 engineered to last.',
    longDescription: '',
  },
  {
    id: 7,
    number: '07',
    title: 'Freestanding Pergolas',
    slug: 'freestanding-pergolas',
    description:
      "Don't have a wall to attach to? Our freestanding steel pergolas are engineered to stand alone \u2014 anywhere in your yard.",
    longDescription: '',
  },
  {
    id: 8,
    number: '08',
    title: 'Custom & Commercial',
    slug: 'custom-commercial',
    description:
      'Large-format or non-standard builds are our speciality. We handle council approvals, structural engineering, and the full build.',
    longDescription: '',
  },
];
