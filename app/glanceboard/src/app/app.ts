import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('glanceboard');

  setTheme(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    const theme = checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
}
