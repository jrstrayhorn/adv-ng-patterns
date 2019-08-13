import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'toggle-button',
  template: '<switch [on]="on" (click)="onClick()"></switch>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleButtonComponent {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();
  onClick() {
    this.on = !this.on;
    this.toggled.emit(this.on);
  }
}
