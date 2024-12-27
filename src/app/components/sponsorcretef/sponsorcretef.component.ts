import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sponsorcretef',
  templateUrl: './sponsorcretef.component.html',
  styleUrls: ['./sponsorcretef.component.scss']
})
export class SponsorcretefComponent implements OnInit {
   page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
  constructor() { }

  ngOnInit(): void {
  }

}
