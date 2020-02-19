import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filters } from '../core/filters.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSubject = new BehaviorSubject<string>(null);
  private filterSubject = new BehaviorSubject<Filters>(null);

  constructor() { }

  updateSearchSubject(data: string) {
    this.searchSubject.next(data);
  }

  updateFilterSubject(data: Filters) {
    this.filterSubject.next(data);
  }

  onChangeDataSearch(): Observable<string> {
    return this.searchSubject.asObservable();
  }

  onChangeFilterSubject(): Observable<Filters> {
    return this.filterSubject.asObservable();
  }
}
