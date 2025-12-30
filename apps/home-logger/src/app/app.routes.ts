import { Route } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'payments',
    loadComponent: () =>
      import('./features/payments/payments-view/payments-view.component').then(
        (m) => m.PaymentsViewComponent,
      ),
  },
  {
    path: 'construction',
    loadComponent: () =>
      import('./features/construction/construction-view.component').then(
        (m) => m.ConstructionViewComponent,
      ),
  },
];
