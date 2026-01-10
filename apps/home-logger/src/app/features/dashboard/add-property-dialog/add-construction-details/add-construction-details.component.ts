import { Component, Input } from '@angular/core';
import { Select } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import {
  propertyConstructionPhases,
  propertyConstructionStatuses,
} from '../../../../consts/consts/property-consts';
import { Field, FieldTree } from '@angular/forms/signals';
import { Property } from 'apps/home-logger/src/app/consts/consts/property';

@Component({
  selector: 'app-add-construction-details',
  templateUrl: './add-construction-details.component.html',
  imports: [Select, DatePickerModule, Field],
})
export class AddConstructionDetailsComponent {
  @Input() propertyForm!: FieldTree<Property>;

  readonly PropertyConstructionPhases = propertyConstructionPhases;
  readonly PropertyConstructionStatuses = propertyConstructionStatuses;
}
