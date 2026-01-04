import {
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBar } from 'primeng/progressbar';
import { AddConstructionDetailsComponent } from './add-construction-details/add-construction-details.component';
import { AddPropertyInformationComponent } from './add-property-information/add-property-information.component';
import { AddPropertyFinancesComponent } from './add-property-finances/add-property-finances.component';

type FormPage = 1 | 2 | 3;

@Component({
  selector: 'app-add-property-dialog',
  templateUrl: './add-property-dialog.component.html',
  imports: [
    Dialog,
    ButtonModule,
    InputTextModule,
    ProgressBar,
    AddConstructionDetailsComponent,
    AddPropertyInformationComponent,
    AddPropertyFinancesComponent,
  ],
})
export class AddPropertyDialogComponent {
  formPage = signal<FormPage>(1);
  formProgressPercentage = computed(() => this.formPage() * 33.33);

  visible = input<boolean>(false);
  closeFormDialog = output();

  constructor() {
    effect(() => {
      if (this.visible()) {
        this.resetForm();
      }
    });
  }

  // manually reset the dialog states when closing; primeng dialog is not destroyed upon closing
  resetForm() {
    this.formPage.set(1);
    // Add more form resets here as needed
  }

  onDialogClose() {
    this.closeFormDialog.emit();
  }

  onNextPageClick() {
    this.formPage.set((this.formPage() + 1) as FormPage);
  }

  onBackPageClick() {
    this.formPage.set((this.formPage() - 1) as FormPage);
  }
}
