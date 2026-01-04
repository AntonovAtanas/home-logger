import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { propertyTypes } from '../../../../consts/consts/property-consts';
import { InputNumberModule } from 'primeng/inputnumber';
import { Property } from 'apps/home-logger/src/app/consts/consts/property';
import { Field, FieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-add-property-information',
  templateUrl: './add-property-information.component.html',
  imports: [InputTextModule, InputNumberModule, Select, Field],
})
export class AddPropertyInformationComponent {
  @Input() propertyForm!: FieldTree<Property>;
  readonly PropertyTypes = propertyTypes;
}
