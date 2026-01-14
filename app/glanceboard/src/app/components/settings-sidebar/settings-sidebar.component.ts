import { Component, signal } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'settings-sidebar',
  standalone: true,
  imports: [FontAwesomeModule,ThemeToggleComponent],
  templateUrl: './settings-sidebar.component.html'
})

export class SettingsSidebarComponent {

  constructor(library: FaIconLibrary) {
    library.addIcons(faGear);
  }

  isOpen = signal(true);

  close() {
    this.isOpen.set(false);
  }
}