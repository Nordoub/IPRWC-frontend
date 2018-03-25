import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../user/user.service';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  firstName: string;
  // isUserLoggedIn: boolean;
  // admin: boolean;
  name:string;
  role:string;
  constructor(public router: Router, private userService:UserService) {
  }

  ngOnInit() {
    // this.checkAdmin()
    if(sessionStorage.getItem('firstName') == null) {
      this.userService.currentName.subscribe(name => this.name = name) // username/role etc gaat weg bij refresh, fixen
      this.userService.currentRole.subscribe(role => this.role = role)
    } else {
      this.userService.changeName(sessionStorage.getItem('firstName'))
      this.userService.changeRole(sessionStorage.getItem('role'))
      this.userService.currentName.subscribe(name => this.name = name) // username/role etc gaat weg bij refresh, fixen
      this.userService.currentRole.subscribe(role => this.role = role)
    }
  }

  // public checkAdmin(): boolean {
  //   let userFirstName = sessionStorage.getItem('firstName');
  //   // if (userFirstName != null) {this.isUserLoggedIn = true;}
  //   let admin = sessionStorage.getItem('role');
  //   console.log(sessionStorage.getItem('role'))
  //   console.log(sessionStorage.getItem('firstName'))
  //   // Check if session = null if so use localstorage
  //   if (userFirstName === null) {
  //     userFirstName = localStorage.getItem('firstName');
  //     admin = localStorage.getItem('role');
  //   }
    // this.firstName = userFirstName;
    // if (admin === 'admin') {
    //   this.admin = true;
    //   return true;
    // }
    // else {
    //   this.admin = false;
    //   return false}
  //
  // }
// public click() {
//     this.firstName = 'changed';}
  public logout() {
    sessionStorage.clear();
    localStorage.clear();
    // this.userService.IsUserLoggedIn.next(false);
    // this.isUserLoggedIn = false;
    // this.admin = false;
    // this.userService.IsUserAdmin.next(false)
    this.userService.changeName(null)
    this.userService.changeRole(null)
    this.router.navigate(['/login']);
  }
}
