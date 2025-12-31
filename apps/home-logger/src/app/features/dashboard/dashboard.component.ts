import { Component } from '@angular/core';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { AddPropertyDialogComponent } from './add-property-dialog/add-property-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [EmptyStateComponent, AddPropertyDialogComponent],
})
export class DashboardComponent {
  visible = false;

  onEmptyStateButtonClick() {
    this.visible = true;
  }

  onAddPropertyDialogClose() {
    this.visible = false;
  }
}
