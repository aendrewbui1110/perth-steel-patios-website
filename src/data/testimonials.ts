export interface Testimonial {
  id: number;
  name: string;
  location: string;
  date: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mark T.',
    location: 'Wembley',
    date: 'March 2025',
    rating: 5,
    text: 'The team at Perth Steel Patios delivered exactly what they promised. The new freestanding patio is rock solid and looks fantastic. Professional from the first quote to the final cleanup.',
  },
  {
    id: 2,
    name: 'Sarah J.',
    location: 'Canning Vale',
    date: 'February 2025',
    rating: 5,
    text: 'We needed a custom carport to fit an awkward space. They engineered a brilliant solution using quality steel. The structure feels incredibly sturdy and the finish is flawless.',
  },
  {
    id: 3,
    name: 'David L.',
    location: 'Hillarys',
    date: 'January 2025',
    rating: 5,
    text: 'Highly recommend. They handled all the council approvals for our attached patio, which took a huge weight off our shoulders. The build quality is exceptional.',
  },
  {
    id: 4,
    name: 'Trish & Brian K.',
    location: 'Ellenbrook',
    date: 'December 2024',
    rating: 5,
    text: "From quote to handover in under three weeks. Kept us updated throughout. The finished gable patio has completely transformed our backyard \u2014 we're out there every evening.",
  },
  {
    id: 5,
    name: 'Mike R.',
    location: 'Fremantle',
    date: 'November 2024',
    rating: 5,
    text: "Got three quotes and Perth Steel Patios were mid-range on price but miles ahead on quality and communication. You can tell by looking at the steel work that it's built to last.",
  },
  {
    id: 6,
    name: 'Jennifer T.',
    location: 'Subiaco',
    date: 'October 2024',
    rating: 5,
    text: "Top-notch service from start to finish. They offered design suggestions we hadn't thought of, and the result is genuinely beautiful. Couldn't be happier.",
  },
];

export const aggregateRating = {
  score: 4.9,
  count: 143,
  source: 'Google Reviews',
};
