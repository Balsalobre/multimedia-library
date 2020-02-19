import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSubject = new BehaviorSubject<string>(null);
  private filterSubject = new BehaviorSubject<string>(null);

  constructor() { }

  updateSearchSubject(data: string) {
    this.searchSubject.next(data);
  }

  updateFilterSubject(data: string) {
    this.filterSubject.next(data);
  }

  onChangeDataSearch(): Observable<string> {
    return this.searchSubject.asObservable();
  }

  onChangeFilterSubject(): Observable<string> {
    return this.filterSubject.asObservable();
  }
}
