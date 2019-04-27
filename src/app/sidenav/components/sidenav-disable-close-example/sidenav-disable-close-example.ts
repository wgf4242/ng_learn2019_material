import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
/** @title Sidenav with custom escape and backdrop click behavior */
@Component({
  templateUrl: 'sidenav-disable-close-example.html',
  styleUrls: ['sidenav-disable-close-example.css'],
})
export class SidenavDisableCloseExampleComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
