import { Component } from '@angular/core';
import { propertyPaymentStructures } from 'apps/home-logger/src/app/consts/consts/property-consts';
import { InputNumberModule } from 'primeng/inputnumber';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-add-property-finances',
  templateUrl: './add-property-finances.component.html',
  imports: [Select, InputNumberModule],
})
export class AddPropertyFinancesComponent {
  readonly PropertyPaymentStructures = propertyPaymentStructures;
}
