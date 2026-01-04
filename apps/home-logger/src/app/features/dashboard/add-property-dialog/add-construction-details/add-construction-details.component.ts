import { Component } from '@angular/core';
import { Select } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import {
  propertyConstructionPhases,
  propertyConstructionStatuses,
} from '../../../../consts/consts/property-consts';

@Component({
  selector: 'app-add-construction-details',
  templateUrl: './add-construction-details.component.html',
  imports: [Select, DatePickerModule],
})
export class AddConstructionDetailsComponent {
  readonly PropertyConstructionPhases = propertyConstructionPhases;
  readonly PropertyConstructionStatuses = propertyConstructionStatuses;
}
