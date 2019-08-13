import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent implements OnInit {
  @Input() on: boolean;
  @Input() className: string;

  constructor() {}

  ngOnInit() {}
}
