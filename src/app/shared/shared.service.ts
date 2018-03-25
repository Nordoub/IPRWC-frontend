import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
  public IsUserLoggedIn: Subject<boolean> = new Subject<boolean>();

  // private messageSourceName = new BehaviorSubject<string>(null);
  // currentName = this.messageSourceName.asObservable();
  // private messageSourceRole = new BehaviorSubject<string>(null);
  // currentRole = this.messageSourceRole.asObservable();

  constructor() { }

  // changeName(message: string) {
  //   this.messageSourceName.next(message)
  // }
  // changeRole(message: string) {
  //   this.messageSourceRole.next(message)
  // }

}
