import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'toggle-on',
  template: `
    <ng-content *ngIf="on"></ng-content>
  `
})
export class ToggleOnComponent implements OnInit {
  @Input() on: boolean;

  constructor() {}

  ngOnInit() {}
}
