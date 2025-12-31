import { Component } from '@angular/core';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [EmptyStateComponent],
})
export class DashboardComponent {
  onEmptyStateButtonClick() {
    // todo: trigger dialog form to add property
    console.log('dada');
  }
}
