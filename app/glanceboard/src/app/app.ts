import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { SettingsSidebarComponent } from './components/settings-sidebar/settings-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent, SettingsSidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('glanceboard');
  // Nenhuma lógica de tema aqui, pois está no componente ThemeToggle
}
