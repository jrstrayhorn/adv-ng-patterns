import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent implements OnInit {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.on = !this.on;
    this.toggled.emit(this.on);
  }
}
