import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  itemMixed = [];

  constructor(
    private resourcesService: ResourcesService
  ) { }

  async ngOnInit() {
    const movies = await this.resourcesService.getAllMovies();
    const eBooks = await this.resourcesService.getAllEbooks();
    const videoGames = await this.resourcesService.getAllVideoGames();
    this.itemMixed = [...movies, ...eBooks, ...videoGames];
    console.log(this.itemMixed);
  }

}
