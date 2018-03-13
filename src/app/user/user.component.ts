import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = new User(1, 'root','root','norddin','-','oubahman','test@hotmail.com','admin');
  public allUsers: Observable<User[]>;

  constructor(private userService:UserService) {
    this.getUsers();
    console.log(this.allUsers)
  }

  ngOnInit() {
  }
  register(){
    this.userService.register(this.user);
  }

  getUsers() {
    this.allUsers = this.userService.getAll();
  }
}
