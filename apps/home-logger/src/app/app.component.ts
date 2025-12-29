import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';

@Component({
  imports: [
    RouterModule,
    ButtonModule,
    SelectButtonModule,
    FormsModule,
    MainMenuComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected title = 'home-logger';

  value1!: string;

  value2: string = 'Beginner';

  value3: string = 'Expert';

  options: any[] = [
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Expert', value: 'Expert' },
  ];
}
