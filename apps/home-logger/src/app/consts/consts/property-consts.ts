export enum PropertyTypes {
  APARTMENT = 'APARTMENT',
  HOUSE = 'HOUSE',
  OTHER = 'OTHER',
}

export const propertyTypes = [
  { name: 'Apartment', value: PropertyTypes.APARTMENT },
  { name: 'House', value: PropertyTypes.HOUSE },
  { name: 'Other', value: PropertyTypes.OTHER },
];

export enum PropertyConstructionPhases {
  FOUNDATION = 'FOUNDATION',
  ACT14 = 'ACT14',
  ACT15 = 'ACT15',
  ACT16 = 'ACT16',
}

export const propertyConstructionPhases = [
  {
    name: 'Foundation & Excavation',
    value: PropertyConstructionPhases.FOUNDATION,
  },
  { name: 'Act 14 - Structural Work', value: PropertyConstructionPhases.ACT14 },
  {
    name: 'Act 14 - Construction Completion',
    value: PropertyConstructionPhases.ACT15,
  },
  { name: 'Act - Permission for Use', value: PropertyConstructionPhases.ACT16 },
];

export enum PropertyConstructionStatuses {
  ON_SCHEDULE = 'ON_SCHEDULE',
  DELAYED = 'DELAYED',
  COMPLETED = 'COMPLETED',
}

export const propertyConstructionStatuses = [
  { name: 'On Schedule', value: PropertyConstructionStatuses.ON_SCHEDULE },
  { name: 'Delayed', value: PropertyConstructionStatuses.DELAYED },
  { name: 'Completed', value: PropertyConstructionStatuses.COMPLETED },
];
