import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { ResourcesService } from 'src/app/services/resources.service';

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
      name: 'Películas',
      target: 'type'
    },
    {
      name: 'Con imagen',
      target: 'image'
    }
  ];

  state = false;
  orderItemsForm: FormGroup;
  bsModalRef: BsModalRef;

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private resourcesService: ResourcesService,
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

  openModal() {
    this.resourcesService.updateItemEditSubject({empty: true});
    const initialState = {
      title: 'Añadir un elemento a la lista',
      comesfrom: 'add',
    };
    this.bsModalRef = this.modalService.show(ModalFormComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
