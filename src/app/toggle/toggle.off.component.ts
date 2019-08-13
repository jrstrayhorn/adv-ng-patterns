import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'toggle-off',
  template: `
    <ng-content *ngIf="!on"></ng-content>
  `
})
export class ToggleOffComponent implements OnInit {
  @Input() on: boolean;

  constructor() {}

  ngOnInit() {}
}
