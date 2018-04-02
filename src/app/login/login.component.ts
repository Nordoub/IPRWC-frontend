import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user/user';
import {UserService} from '../user/user.service';
import {MatDialog} from '@angular/material';
import {AdduserComponent} from '../user/adduser/adduser.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  remember;
  name:string;
  role:string;
  constructor(private userService: UserService, private router: Router, public dialog:MatDialog) {
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
  openAddUser(): void {
    let dialogRef = this.dialog.open(AdduserComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
