import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search = new FormControl();
  user: string;

  constructor(
    private searchService: SearchService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.search.valueChanges.subscribe(data => {
      this.searchService.updateSearchSubject(data);
    });

    this.loginService.onLoginSubjectChange().subscribe(data => {
      if (data) {
        this.user = data.userName;
      }
    });
  }
}
