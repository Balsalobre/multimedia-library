import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';
import { SearchService } from 'src/app/services/search.service';
import { SortDatePipe } from '../pipes/sort-date.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { TypePipe } from '../pipes/type.pipe';
import { HasImagePipe } from '../pipes/has-image.pipe';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  itemsMixed = [];
  originalData = [];
  searchText: string;
  searchDate: string;
  bsModalRef: BsModalRef;
  itemClicked: number;

  constructor(
    private resourcesService: ResourcesService,
    private searchService: SearchService,
    private sortDate: SortDatePipe,
    private sort: SortPipe,
    private type: TypePipe,
    private hasImage: HasImagePipe,
    private modalService: BsModalService,
  ) { }

  async ngOnInit() {
    const movies = await this.resourcesService.getAllMovies();
    const eBooks = await this.resourcesService.getAllEbooks();
    const videoGames = await this.resourcesService.getAllVideoGames();
    this.itemsMixed = [...movies, ...eBooks, ...videoGames];
    this.originalData = this.itemsMixed;

    this.resourcesService.onItemDataChange().subscribe(data => {
      if (data) {
        this.itemsMixed.unshift(data);
      }
    });

    this.searchService.onChangeDataSearch().subscribe(data => {
      this.searchText = data;
    });

    this.searchService.onChangeFilterSubject().subscribe(data => {
      if (data) {
        switch (true) {
          case (data.creation):
            this.itemsMixed = this.originalData;
            this.itemsMixed = this.sortDate.transform(this.itemsMixed);
            break;
          case (data.alphabetic):
            this.itemsMixed = this.sort.transform(this.itemsMixed);
            break;
          case (data.type):
            this.itemsMixed = this.type.transform(this.itemsMixed, 'movie');
            break;
          case (data.image):
            this.itemsMixed = this.hasImage.transform(this.itemsMixed);
            break;
          case (!data.image || !data.type || !data.alphabetic || !data.creation):
            this.itemsMixed = this.originalData;
            break;
        }
      }
    });

    this.resourcesService.onItemArrayToEditChange().subscribe(data => {
      if (data) {
        this.itemsMixed[this.itemClicked] = data;
      }
    });
  }

  reciveEvent(item: number) {
    if (item === 0 ) {
      this.itemsMixed.shift();
    }
    this.itemsMixed.splice(item, item);
  }

  editElement(i , data) {
    this.itemClicked = i;
    data.empty = false;
    this.resourcesService.updateItemEditSubject(data);
    this.openModal();
  }

  openModal() {
    const initialState = {
      title: 'Editar un elemento de la lista',
      comesfrom: 'edit',
    };
    this.bsModalRef = this.modalService.show(ModalFormComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
