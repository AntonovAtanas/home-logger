import { Property } from 'apps/home-logger/src/app/consts/consts/property';
import {
  PropertyConstructionPhases,
  PropertyConstructionStatuses,
  PropertyPaymentStructure,
  PropertyTypes,
} from 'apps/home-logger/src/app/consts/consts/property-consts';

export const propertyInitialFormData: Property = {
  propertyName: '',
  propertyType: PropertyTypes.APARTMENT,
  propertyCity: '',
  propertyAddress: '',
  propertyTotalArea: 0,
  propertyFloor: null,
  constructionStartDate: '',
  constructionEndDate: '',
  currentConstructionPhase: PropertyConstructionPhases.FOUNDATION,
  currentConstructionStatus: PropertyConstructionStatuses.ON_SCHEDULE,
  purchasePrice: 0,
  paymentStructure: PropertyPaymentStructure.STAGE_BASED,
  paymentsPerStage: {
    signContract: 0,
    act14Completion: 0,
    act15Completion: 0,
    act16Completion: 0,
  },
};
