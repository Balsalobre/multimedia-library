import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResourcesService } from 'src/app/services/resources.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];
  bsValue = new Date();
  itemForm: FormGroup;

  constructor(
    public resourcesService: ResourcesService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
  ) {
    this.createItemForm();
  }

  ngOnInit() {
  }

  createItemForm() {
    this.itemForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(20)]],
      images: ['', [Validators.required]],
      date: new Date(),
      type: ['', [Validators.required]],
    });
  }

  get f() { return this.itemForm.controls; }

  onSubmit() {
    if (!this.itemForm.valid) {
      this.toastrService.error('Rellene los campos correctamente', 'Error');
      return;
    }
    this.itemForm.value.images = [ this.itemForm.value.images ];
    const formData = this.itemForm.value;
    this.resourcesService.updateItemDataSubject(formData);
    this.itemForm.reset();
    this.toastrService.success('!Nuevo elemento guardado!', 'OK!');
  }

}
