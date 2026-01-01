import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { propertyTypes } from '../../../../consts/consts/property-types';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-add-property-information',
  templateUrl: './add-property-information.component.html',
  imports: [InputTextModule, InputNumberModule, Select],
})
export class AddPropertyInformationComponent {
  readonly propertyTypes = propertyTypes;
}
