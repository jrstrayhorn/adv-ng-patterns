import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ContentChild, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { ToggleOnComponent } from './toggle.on.component';
import { ToggleOffComponent } from './toggle.off.component';
import { ToggleButtonComponent } from './toggle.button.component';

@Component({
  selector: 'toggle',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent implements OnInit, AfterContentInit {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.toggleButton.toggled.subscribe(on => {
      this.on = on;
      this.toggled.emit(on);
      this.toggleOn.on = on;
      this.toggleOff.on = on;
      //this.cdr.detectChanges();
    });
  }

  @ContentChild(ToggleOnComponent, { static: true }) toggleOn: ToggleOnComponent;
  @ContentChild(ToggleOffComponent, { static: true }) toggleOff: ToggleOffComponent;
  @ContentChild(ToggleButtonComponent, { static: true }) toggleButton: ToggleButtonComponent;
}
