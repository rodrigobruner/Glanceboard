import { Component, Input } from '@angular/core';

@Component({
  selector: 'theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html'
})
export class ThemeToggleComponent {
  @Input() theme: 'light' | 'dark' = 'light';

  toggleTheme(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    const theme = checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
}
