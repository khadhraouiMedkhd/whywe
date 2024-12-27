import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipient-f',
  templateUrl: './recipient-f.component.html',
  styleUrls: ['./recipient-f.component.scss']
})
export class RecipientFComponent implements OnInit {
test() {
}
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
