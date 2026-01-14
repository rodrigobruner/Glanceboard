import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'datetime',
  templateUrl: './datetime.component.html',
})
export class DateTimeComponent implements OnDestroy {
  currentTime: string = new Date().toLocaleTimeString();
  currentDate: string = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  private timer: any;

  constructor(private cdr: ChangeDetectorRef) {
    this.timer = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
      this.currentDate = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      this.cdr.detectChanges(); // força atualização da view
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}