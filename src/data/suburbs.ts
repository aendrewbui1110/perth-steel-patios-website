export interface Suburb {
  name: string;
  slug: string;
  council: string;
  description: string;
  region: string;
  distanceFromCBD: string;
  popularStyles: string[];
  nearbySuburbs: string[];
}

export const suburbs: Suburb[] = [
  {
    name: 'Joondalup',
    slug: 'joondalup',
    council: 'City of Joondalup',
    description:
      'Joondalup homeowners love entertaining outdoors with its warm coastal climate. Our team has installed dozens of patios across the Joondalup area, from Currambine to Edgewater. Whether you need shade by the pool or a full alfresco entertaining space, we know what works in this part of Perth.',
    region: 'Northern Suburbs',
    distanceFromCBD: '25km north',
    popularStyles: ['Gable Roof', 'Flat Roof'],
    nearbySuburbs: ['karrinyup', 'yanchep'],
  },
  {
    name: 'Mandurah',
    slug: 'mandurah',
    council: 'City of Mandurah',
    description:
      'Mandurah\'s waterside lifestyle makes outdoor living a priority, not a luxury. We\'ve built patios and carports throughout Mandurah, from canal-front properties in Halls Head to new estates in Lakelands. The salt air demands quality steel, and that\'s exactly what we deliver.',
    region: 'Southern Corridor',
    distanceFromCBD: '72km south',
    popularStyles: ['Flat Roof', 'Carports'],
    nearbySuburbs: ['rockingham', 'baldivis'],
  },
  {
    name: 'Rockingham',
    slug: 'rockingham',
    council: 'City of Rockingham',
    description:
      'Rockingham families spend more time outdoors than most, and a quality patio makes all the difference. From Warnbro to Safety Bay, we\'ve helped homeowners extend their living space with structures built to handle the coastal conditions. Our local experience means faster council approvals too.',
    region: 'Southern Suburbs',
    distanceFromCBD: '47km south',
    popularStyles: ['Flat Roof', 'Gable Roof'],
    nearbySuburbs: ['baldivis', 'mandurah'],
  },
  {
    name: 'Armadale',
    slug: 'armadale',
    council: 'City of Armadale',
    description:
      'Armadale\'s mix of established homes and new developments keeps our team busy with a wide range of patio styles. The hills backdrop is stunning, and our builds are engineered to handle the slightly different wind loads you get on elevated blocks. We service Armadale, Kelmscott, and Roleystone.',
    region: 'South-Eastern Suburbs',
    distanceFromCBD: '28km southeast',
    popularStyles: ['Gable Roof', 'Skillion'],
    nearbySuburbs: ['canning-vale', 'ellenbrook'],
  },
  {
    name: 'Ellenbrook',
    slug: 'ellenbrook',
    council: 'City of Swan',
    description:
      'Ellenbrook is one of Perth\'s fastest-growing suburbs, and new homeowners are investing in outdoor living from day one. We\'ve completed dozens of builds here, from compact flat roofs on standard lots to large gable patios on acreage. The community focus on family entertaining keeps us coming back.',
    region: 'North-Eastern Suburbs',
    distanceFromCBD: '30km northeast',
    popularStyles: ['Gable Roof', 'Flat Roof'],
    nearbySuburbs: ['swan-valley', 'armadale'],
  },
  {
    name: 'Baldivis',
    slug: 'baldivis',
    council: 'City of Rockingham',
    description:
      'Baldivis has boomed with young families who want to make the most of their backyards. Flat roof patios and carports are the most popular requests we get here, and we know the City of Rockingham approval process inside out. Our structures are built tough for the wind exposure common in this area.',
    region: 'Southern Suburbs',
    distanceFromCBD: '50km south',
    popularStyles: ['Flat Roof', 'Carports'],
    nearbySuburbs: ['rockingham', 'mandurah'],
  },
  {
    name: 'Fremantle',
    slug: 'fremantle',
    council: 'City of Fremantle',
    description:
      'Fremantle\'s heritage streetscapes and character homes require a thoughtful approach to patio design. We specialise in heritage-sensitive builds that satisfy Freo\'s strict council requirements while giving you a modern, functional outdoor space. From South Freo to Beaconsfield, we know the rules and the aesthetic.',
    region: 'Western Suburbs',
    distanceFromCBD: '19km southwest',
    popularStyles: ['Custom', 'Heritage-Sensitive Designs'],
    nearbySuburbs: ['subiaco'],
  },
  {
    name: 'Subiaco',
    slug: 'subiaco',
    council: 'City of Subiaco',
    description:
      'Subiaco homeowners expect premium quality, and that\'s exactly what we deliver. The inner-city location means space is tight but expectations are high. Our custom designs maximise every square metre while complementing the character homes and modern townhouses that define Subi.',
    region: 'Inner Western Suburbs',
    distanceFromCBD: '5km west',
    popularStyles: ['Custom', 'Premium Designs'],
    nearbySuburbs: ['fremantle', 'karrinyup'],
  },
  {
    name: 'Canning Vale',
    slug: 'canning-vale',
    council: 'City of Canning',
    description:
      'Canning Vale is a hub for families who love to entertain. The established homes and generous block sizes make it ideal for gable patios that create a real wow factor. We\'ve built throughout Canning Vale and the surrounding suburbs, and we handle all City of Canning approvals as standard.',
    region: 'South-Eastern Suburbs',
    distanceFromCBD: '18km south',
    popularStyles: ['Gable Roof', 'Flat Roof'],
    nearbySuburbs: ['armadale'],
  },
  {
    name: 'Karrinyup',
    slug: 'karrinyup',
    council: 'City of Stirling',
    description:
      'Karrinyup\'s established homes and proximity to the coast make it a prime spot for outdoor living upgrades. Whether you\'re renovating a 1970s original or adding to a brand-new build, our team designs patios that suit the character of the street. We service Karrinyup, Gwelup, and Innaloo.',
    region: 'Northern Suburbs',
    distanceFromCBD: '12km north',
    popularStyles: ['Flat Roof', 'Gable Roof'],
    nearbySuburbs: ['joondalup', 'subiaco'],
  },
  {
    name: 'Swan Valley',
    slug: 'swan-valley',
    council: 'City of Swan',
    description:
      'The Swan Valley lifestyle is all about spending time outdoors among the vineyards and gardens. Freestanding pergolas and custom structures are our most popular builds here, designed to blend with the rural-residential character of the area. We understand the City of Swan\'s specific requirements for this unique zone.',
    region: 'North-Eastern Suburbs',
    distanceFromCBD: '25km northeast',
    popularStyles: ['Freestanding Pergolas', 'Custom'],
    nearbySuburbs: ['ellenbrook'],
  },
  {
    name: 'Yanchep',
    slug: 'yanchep',
    council: 'City of Wanneroo',
    description:
      'Yanchep is Perth\'s northern growth corridor, and new homeowners are adding patios and carports as soon as they settle in. The coastal wind exposure up here demands serious engineering, and our BlueScope steel structures are built to handle it. We service Yanchep, Two Rocks, and Alkimos.',
    region: 'Far Northern Suburbs',
    distanceFromCBD: '56km north',
    popularStyles: ['Flat Roof', 'Carports'],
    nearbySuburbs: ['joondalup'],
  },
];
