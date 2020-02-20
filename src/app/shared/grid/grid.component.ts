import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';
import { SearchService } from 'src/app/services/search.service';
import { SortDatePipe } from '../pipes/sort-date.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { TypePipe } from '../pipes/type.pipe';
import { HasImagePipe } from '../pipes/has-image.pipe';

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

  constructor(
    private resourcesService: ResourcesService,
    private searchService: SearchService,
    private sortDate: SortDatePipe,
    private sort: SortPipe,
    private type: TypePipe,
    private hasImage: HasImagePipe,
  ) { }

  async ngOnInit() {
    const movies = await this.resourcesService.getAllMovies();
    const eBooks = await this.resourcesService.getAllEbooks();
    const videoGames = await this.resourcesService.getAllVideoGames();
    this.itemsMixed = [...movies, ...eBooks, ...videoGames];
    this.originalData = this.itemsMixed;

    console.log('From service', this.itemsMixed);

    this.resourcesService.onItemDataChange().subscribe(data => {
      if (data) {
        console.log(data);
        this.itemsMixed.unshift(data);
        console.log('>>>>>>>>>>>>', this.itemsMixed);
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
            console.log('entra');
            this.itemsMixed = this.originalData;
            break;
        }
      }
    });
  }

}
