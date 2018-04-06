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

  user:User;
  public allUsers: Observable<User[]>;

  constructor(private userService:UserService) {
    this.getUsers();
    console.log(this.allUsers)
  }

  ngOnInit() {
    this.userService.getMe().subscribe(user => {
      this.user = user;
    });
  }
  register(){
    this.userService.register(this.user);
  }

  getUsers() {
    this.allUsers = this.userService.getAll();
  }
  onSubmit() {
    if(this.user.username!=null) {this.userService.updateUser(this.user)}
  }
}
// @Component({
//   selector: 'app-message',
//   template: '<p>Product is aan uw winkelwagen toegevoegd.</p>',
//   styles: [`.example-pizza-party { color: hotpink; }`],
// })
// export class MessageComponent {}
