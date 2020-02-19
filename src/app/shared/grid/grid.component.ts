import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  itemsMixed = [];
  searchText: string;
  searchDate: string;


  constructor(
    private resourcesService: ResourcesService,
    private searchService: SearchService
  ) { }

  async ngOnInit() {
    const movies = await this.resourcesService.getAllMovies();
    const eBooks = await this.resourcesService.getAllEbooks();
    const videoGames = await this.resourcesService.getAllVideoGames();
    this.itemsMixed = [...movies, ...eBooks, ...videoGames];
    console.log(this.itemsMixed);

    this.searchService.onChangeDataSearch().subscribe(data => {
      this.searchText = data;
    });

    this.searchService.onChangeFilterSubject().subscribe(data => {
      console.log('data', data);
    });
  }

}
