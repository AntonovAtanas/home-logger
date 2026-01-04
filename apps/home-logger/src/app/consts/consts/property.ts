import {
  PropertyConstructionPhases,
  PropertyConstructionStatuses,
  PropertyPaymentStructure,
  PropertyTypes,
} from './property-consts';

export interface Property {
  propertyName: string;
  propertyType: PropertyTypes;
  propertyCity: string;
  propertyAddress: string;
  propertyTotalArea: number;
  propertyFloor: number | null;
  constructionStartDate: string;
  constructionEndDate: string;
  currentConstructionPhase: PropertyConstructionPhases;
  currentConstructionStatus: PropertyConstructionStatuses;
  purchasePrice: number;
  paymentStructure: PropertyPaymentStructure;
  paymentsPerStage: PaymentsPerStage | null;
}

interface PaymentsPerStage {
  signContract: number;
  act14Completion: number;
  act15Completion: number;
  act16Completion: number;
}
