/**
 * Created by School on 10-3-2018.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {User} from './user';
import {ApiService} from '../shared/api.service';
import {AuthorizationService} from '../shared/authorization.service';




@Injectable()
export class UserService {
  selectedUser: Subject<User> = new Subject<User>();
  allUsers$: Observable<User>;
  editUser: User;

  constructor(private api: ApiService, private authService: AuthorizationService, private router: Router) {

  }

  public login(user: User, remember: boolean): void {
    this.authService.setAuthorization(user.username, user.password);
    this.api.get<User>('users/login').subscribe(
      //on succes
      authenticator => {
        this.authService.storeAuthorization(authenticator, remember);
        this.setLoginSession(authenticator, remember);

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

  public getAll(): Observable<User[]> {
    return this.api.get<User[]>('users')
  }

  private goHome()
  {
    this.router.navigate(['/']);
  }
}
