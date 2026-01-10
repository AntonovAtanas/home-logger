import { Component, Input } from '@angular/core';
import { Property } from 'apps/home-logger/src/app/consts/consts/property';
import {
  PropertyPaymentStructure,
  propertyPaymentStructures,
} from 'apps/home-logger/src/app/consts/consts/property-consts';
import { Field, FieldTree } from '@angular/forms/signals';
import { InputNumberModule } from 'primeng/inputnumber';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-add-property-finances',
  templateUrl: './add-property-finances.component.html',
  imports: [Select, InputNumberModule, Field],
})
export class AddPropertyFinancesComponent {
  @Input() propertyForm!: FieldTree<Property>;

  readonly PropertyPaymentStructureEnum = PropertyPaymentStructure;
  readonly PropertyPaymentStructures = propertyPaymentStructures;
}
