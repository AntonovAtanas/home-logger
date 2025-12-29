import { Route } from '@angular/router';
import { PaymentsViewComponent } from './features/payments/payments-view/payments-view.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'payments',
    component: PaymentsViewComponent,
  },
];
