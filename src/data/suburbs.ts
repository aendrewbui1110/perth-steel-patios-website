export interface Suburb {
  name: string;
  slug: string;
  council: string;
  description: string;
}

export const suburbs: Suburb[] = [
  { name: 'Joondalup', slug: 'joondalup', council: 'City of Joondalup', description: '' },
  { name: 'Mandurah', slug: 'mandurah', council: 'City of Mandurah', description: '' },
  { name: 'Rockingham', slug: 'rockingham', council: 'City of Rockingham', description: '' },
  { name: 'Armadale', slug: 'armadale', council: 'City of Armadale', description: '' },
  { name: 'Ellenbrook', slug: 'ellenbrook', council: 'City of Swan', description: '' },
  { name: 'Baldivis', slug: 'baldivis', council: 'City of Rockingham', description: '' },
  { name: 'Fremantle', slug: 'fremantle', council: 'City of Fremantle', description: '' },
  { name: 'Subiaco', slug: 'subiaco', council: 'City of Subiaco', description: '' },
  { name: 'Canning Vale', slug: 'canning-vale', council: 'City of Canning', description: '' },
  { name: 'Karrinyup', slug: 'karrinyup', council: 'City of Stirling', description: '' },
  { name: 'Swan Valley', slug: 'swan-valley', council: 'City of Swan', description: '' },
  { name: 'Yanchep', slug: 'yanchep', council: 'City of Wanneroo', description: '' },
];
