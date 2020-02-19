import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search = new FormControl();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.search.valueChanges.subscribe(data => {
      this.searchService.updateSearchSubject(data);
    });
  }
}
