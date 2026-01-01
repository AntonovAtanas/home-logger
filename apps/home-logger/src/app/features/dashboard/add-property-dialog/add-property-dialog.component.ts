import { Component, computed, input, output, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBar } from 'primeng/progressbar';
import { AddConstructionDetailsComponent } from './construction-details/add-construction-details.component';

type FormPage = 1 | 2 | 3 | 4;

@Component({
  selector: 'app-add-property-dialog',
  templateUrl: './add-property-dialog.component.html',
  imports: [
    Dialog,
    ButtonModule,
    InputTextModule,
    ProgressBar,
    AddConstructionDetailsComponent,
  ],
})
export class AddPropertyDialogComponent {
  formPage = signal<FormPage>(1);
  formProgressPercentage = computed(() => this.formPage() * 25);

  visible = input<boolean>(false);
  closeFormDialog = output();

  onDialogClose() {
    this.closeFormDialog.emit();
  }
}
