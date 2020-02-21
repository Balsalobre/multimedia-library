import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() removeItem = new EventEmitter<string>();
  @Output() editElement = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickRemoveElement(event: Event) {
    this.removeItem.emit(event.type);
  }

  clickEditElement(event: Event) {
    this.editElement.emit(event.type);
  }
}
