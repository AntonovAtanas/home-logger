import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { propertyTypes } from '../../../../consts/consts/property-types';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-add-construction-details',
  templateUrl: './add-construction-details.component.html',
  imports: [InputTextModule, InputNumberModule, Select],
})
export class AddConstructionDetailsComponent {
  readonly propertyTypes = propertyTypes;
}
