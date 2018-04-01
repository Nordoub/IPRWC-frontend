import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:string;
  role:string;
  constructor(public router: Router, private userService:UserService) {
  }

  ngOnInit() {
    if(sessionStorage.getItem('firstName') == null) {
      this.userService.currentName.subscribe(name => this.name = name)
      this.userService.currentRole.subscribe(role => this.role = role)
    } else {
      this.userService.changeName(sessionStorage.getItem('firstName'))
      this.userService.changeRole(sessionStorage.getItem('role'))
      this.userService.currentName.subscribe(name => this.name = name)
      this.userService.currentRole.subscribe(role => this.role = role)
    }
  }

  public logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.userService.changeName(null)
    this.userService.changeRole(null)
    this.router.navigate(['/login']);
  }
}
