import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Filters } from 'src/app/core/filters.interface';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {

  state = false;

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
      name: 'Películas',
      target: 'type'
    },
    {
      name: 'Con imagen',
      target: 'image'
    }
  ];


  orderItemsForm: FormGroup;

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit() {
    this.orderItemsForm.valueChanges.subscribe(data => {
      this.searchService.updateFilterSubject(data);
    });
  }

  createForm() {
    this.orderItemsForm = this.formBuilder.group({
      creation: [],
      alphabetic: [],
      type: [],
      image: [],
    });
  }
}
