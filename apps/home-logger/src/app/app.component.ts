import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';

@Component({
  imports: [RouterModule, MainMenuComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected title = 'home-logger';
}
