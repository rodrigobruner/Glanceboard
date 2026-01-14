import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { SettingsSidebarComponent } from './components/settings-sidebar/settings-sidebar.component';
import { CarouselComponent } from "./components/carousel/carousel.component";
import { DateTimeComponent } from "./components/datetime/datetime.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent, SettingsSidebarComponent, CarouselComponent, DateTimeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('glanceboard');
  public carouselComponents = [DateTimeComponent];
}