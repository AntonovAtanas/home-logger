import { Component, input, output } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-property-dialog',
  templateUrl: './add-property-dialog.component.html',
  imports: [Dialog, ButtonModule, InputTextModule],
})
export class AddPropertyDialogComponent {
  visible = input<boolean>(false);
  closeFormDialog = output();

  onDialogClose() {
    this.closeFormDialog.emit();
  }
}
