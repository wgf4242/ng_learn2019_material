import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

/** @title Fixed sidenav */
@Component({
  templateUrl: 'sidenav-fixed-example.html',
  styleUrls: ['sidenav-fixed-example.css'],
})
export class SidenavFixedExampleComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

}
