import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidena-open-close-example',
  templateUrl: './sidena-open-close-example.component.html',
  styleUrls: ['./sidena-open-close-example.component.scss']
})
export class SidenaOpenCloseExampleComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

}
