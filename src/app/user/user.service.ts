/**
 * Created by School on 10-3-2018.
 */
import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import {ApiService} from '../shared/api.service';
import {AuthorizationService} from '../shared/authorization.service';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';



@Injectable()
export class UserService {
  selectedUser: Subject<User> = new Subject<User>();
  allUsers$: Observable<User>;
  editUser: User;
  // onMainEvent: EventEmitter = new EventEmitter();
  // public IsUserLoggedIn: Subject<boolean> = new Subject<boolean>();
  // public IsUserAdmin: Subject<boolean> = new Subject<boolean>();
  private messageSourceName = new BehaviorSubject<string>(null);
  currentName = this.messageSourceName.asObservable();
  private messageSourceRole = new BehaviorSubject<string>(null);
  currentRole = this.messageSourceRole.asObservable();

  constructor(private api: ApiService, private authService: AuthorizationService, private router: Router) {

  }
  changeName(message: string) {
    this.messageSourceName.next(message)
  }
  changeRole(message: string) {
    this.messageSourceRole.next(message)
  }

  public login(user: User, remember: boolean): void {
    this.authService.setAuthorization(user.username, user.password);
    this.api.get<User>('users/login').subscribe(
      //on succes
      authenticator => {
        this.authService.storeAuthorization(authenticator, remember);
        this.setLoginSession(authenticator, remember);
        // this.IsUserLoggedIn.next(true);
        // if(authenticator.role == 'admin') {
        //   this.IsUserAdmin.next(true);
        // }
        this.goHome();

      },
      //on fail
      error => {
        alert('Het inloggen is mislukt');
      }
    )
  }


  public setLoginSession(user: User, local: boolean): void {
    let storage = local ? localStorage : sessionStorage;

    storage.setItem('firstName', user.firstname);
    storage.setItem('role', user.role);
    storage.setItem('userName', user.username);
    storage.setItem('id', String(user.id));
    this.changeName(sessionStorage.getItem('firstName'))
    this.changeRole(sessionStorage.getItem('role'))


  }

  public register(user: User): void
  {
    let data =
      {
        username: user.username,
        password: user.password,
        firstname: user.firstname,
        preposition: user.preposition,
        lastname: user.lastname,
        email: user.email,
        role: user.role
      };
    this.api.post<void>('users', data).subscribe
    (
      response => {
        alert('Het aanmaken is gelukt');
      },
      error =>{
        alert('Het aanmaken is niet gelukt');
      }
    )
  }
  public registerFromLoginPage(user: User): void
  {
    let data =
      {
        username: user.username,
        password: user.password,
        firstname: user.firstname,
        preposition: user.preposition,
        lastname: user.lastname,
        email: user.email,
        role: user.role
      };
    this.api.post<void>('users/register', data).subscribe
    (
      response => {
        alert('Het aanmaken is gelukt');
      },
      error =>{
        alert('Het aanmaken is niet gelukt');
      }
    )
  }
  public updateUser(user: User): void
  {
    let data =
      {
        username: user.username,
        password: user.password,
        firstname: user.firstname,
        preposition: user.preposition,
        lastname: user.lastname,
        email: user.email,
        role: user.role
      };

    this.api.post<void>('users/update', data).subscribe
    (
      data => {
        alert('Het aanpassen is gelukt');
      },
      error =>{
        alert('Het aanpassen is niet gelukt');
      }
    )
  }

  public getAll(): Observable<User[]> {
    return this.api.get<User[]>('users')
  }

  public getMe(){
    return this.api.get<User>('users/'+ this.authService.getUserName());
  }

  private goHome()
  {
    this.router.navigate(['/']);
  }
}
