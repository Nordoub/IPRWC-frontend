import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user/user';
import {UserService} from '../user/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  remember;
  // public allUsers: Observable<User[]>;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    let authorizationString = sessionStorage.getItem('authorization');

    if (authorizationString === null) {
      authorizationString = localStorage.getItem('authorization');
    }
    if(authorizationString !== null){
      this.router.navigate(['/'])
    }
    // this.allUsers = this.userService.getAll()
  }

  onSubmit() {
    this.userService.login(this.user, this.remember);
  }

}
