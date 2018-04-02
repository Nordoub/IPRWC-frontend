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
  }
  onSubmit() {
    this.userService.register(this.user)
  }
}
