import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {

  orderItems = [
    {
      name: 'Fecha de creación',
      target: 'creation'
    },
    {
      name: 'Alfabéticamente',
      target: 'alphabetic'
    },
    {
      name: 'Tipo',
      target: 'type'
    },
    {
      name: 'Con imagen',
      target: 'image'
    }
  ];

  firstname = new FormControl('');
  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit() {
  }

  orderItem(item: string) {
    this.searchService.updateFilterSubject(item);
  }
}
