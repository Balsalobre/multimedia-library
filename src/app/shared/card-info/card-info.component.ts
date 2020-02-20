import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  @Input() img: string;
  @Input() title: string;
  @Input() description: string;
  @Input() date: Date;
  @Output() removeItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickRemoveElement(event: Event) {
    this.removeItem.emit('remove');
    console.log(event);
  }

}
