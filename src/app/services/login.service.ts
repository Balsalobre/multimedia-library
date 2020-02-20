import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../core/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginSubject = new BehaviorSubject<User>(null);

  constructor() { }

  updateLoginSubject(data: User) {
    this.loginSubject.next(data);
  }

  onLoginSubjectChange(): Observable<User> {
    return this.loginSubject.asObservable();
  }
}
