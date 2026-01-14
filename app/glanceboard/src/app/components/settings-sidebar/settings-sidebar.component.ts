import { Component, signal } from '@angular/core';

@Component({
  selector: 'settings-sidebar',
  standalone: true,
  templateUrl: './settings-sidebar.component.html'
})

export class SettingsSidebarComponent {
  isOpen = signal(true);

  close() {
    this.isOpen.set(false);
  }
}