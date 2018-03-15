import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  adminBoolean: boolean = false;
  firstName: string;
  constructor(public router: Router) { }

  ngOnInit() {
    this.checkAdmin()

  }

  public checkAdmin(): boolean {
    let userFirstName = sessionStorage.getItem('firstName');
    let admin = sessionStorage.getItem('role');

    // Check if session = null if so use localstorage
    if (userFirstName === null) {
      userFirstName = localStorage.getItem('firstName');
      admin = localStorage.getItem('role');
    }
    this.firstName = userFirstName;
    if (admin === 'coach') {
      this.adminBoolean = true;
      return true;
    }
    else {return false}
  }

  public logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
