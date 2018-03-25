import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user/user';
import {UserService} from '../user/user.service';
import {Observable} from 'rxjs/Observable';
import {SharedService} from '../shared/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  remember;
  // public allUsers: Observable<User[]>;
  // isUserLoggedIn: boolean;
  name:string;
  role:string;
  constructor(private userService: UserService, private router: Router) {
    // this.userService.IsUserLoggedIn.subscribe( value => {
    //   this.isUserLoggedIn = value;
    // });
  }

  ngOnInit() {
    this.userService.currentName.subscribe(name => this.name = name)
    this.userService.currentRole.subscribe(role => this.role = role)
    let authorizationString = sessionStorage.getItem('authorization');

    if (authorizationString === null) {
      authorizationString = localStorage.getItem('authorization');
    }
    if(authorizationString !== null){
      this.router.navigate([''])
    }
  }

  onSubmit() {
    this.userService.login(this.user, this.remember);
  }

}
