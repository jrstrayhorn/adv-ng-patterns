import { NgModule } from '@angular/core';

import { ToggleComponent } from './toggle.component';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './toggle.button.component';
import { ToggleOnComponent } from './toggle.on.component';
import { ToggleOffComponent } from './toggle.off.component';
import { SwitchComponent } from '../switch/switch.component';

@NgModule({
  imports: [CommonModule],
  exports: [ToggleComponent, ToggleButtonComponent, ToggleOffComponent, ToggleOnComponent],
  declarations: [ToggleComponent, ToggleButtonComponent, ToggleOnComponent, ToggleOffComponent, SwitchComponent],
  providers: []
})
export class ToggleModule {}
