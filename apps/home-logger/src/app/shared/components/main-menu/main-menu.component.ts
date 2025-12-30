import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  imports: [PanelMenu, RouterLink],
})
export class MainMenuComponent {
  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-chart-bar',
      link: '/',
    },
    {
      label: 'Payments',
      icon: 'pi pi-wallet',
      link: '/payments',
    },
    {
      label: 'Construction',
      icon: 'pi pi-building',
      link: '/construction',
    },
  ];
}
