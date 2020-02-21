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
  isTheFormEmpty = true;

  constructor(
    public resourcesService: ResourcesService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
  ) {
    this.createItemForm();
  }

  ngOnInit() {
    this.resourcesService.onItemEditChange().subscribe(data => {
      if (data.empty) {
        this.itemForm.reset();
        this.itemForm.controls.date.setValue(new Date());
        this.itemForm.controls.type.setValue('movie');
      } else {
        this.isTheFormEmpty = false;
        this.itemForm.controls.title.setValue(data.title);
        this.itemForm.controls.description.setValue(data.description);
        this.itemForm.controls.images.setValue(data.images[0]);
        this.itemForm.controls.date.setValue(data.date);
        this.itemForm.controls.type.setValue(data.type);
      }
    });
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
    this.itemForm.value.images = [ this.itemForm.value.images ];
    const formData = this.itemForm.value;
    if (this.isTheFormEmpty) {
      this.resourcesService.updateItemDataSubject(formData);
      this.itemForm.reset();
      this.toastrService.success('!Nuevo elemento Guardado!', 'OK!');
      this.bsModalRef.hide();
    } else {
      this.resourcesService.updateItemArrayToEdit(formData);
      this.toastrService.success('!Nuevo elemento Modificado!', 'OK!');
      this.bsModalRef.hide();
    }
  }
}
