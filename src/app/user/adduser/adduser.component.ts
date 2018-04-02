import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user:User = new User();

  constructor(private userService:UserService) {}

  ngOnInit() {
    this.user.role = 'guest';
  }
  onSubmit() {
    // this.userService.register(this.user)
    console.log(this.user.username)
    console.log(this.user.password)
    console.log(this.user.firstname)
    console.log(this.user.preposition)
    console.log(this.user.lastname)
    console.log(this.user.email)
    console.log(this.user.role)
  }
  admin(admin:string) {
    if (admin =='admin') {
        this.user.role = 'admin';
    } else {this.user.role = 'guest'};
  }
}
