import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-head',
  templateUrl: './inner-head.component.html',
  styleUrls: ['./inner-head.component.scss'],
})
export class InnerHeadComponent  implements OnInit {

  @Input() pageTitle!: string;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {}

  close() {
    this.location.back();
  }

}
