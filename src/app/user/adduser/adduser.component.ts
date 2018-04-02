import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user:User = new User();
  checked = false;
  role:string;
  constructor(private userService:UserService, public dialogRef: MatDialogRef<AdduserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}
  selected = 'guest';
  ngOnInit() {
    this.user.role = 'guest';
    if (sessionStorage.getItem('admin') == null) {
      this.userService.currentRole.subscribe(role => this.role = role)
    } else {
      this.userService.changeRole(sessionStorage.getItem('role'))
      this.userService.currentRole.subscribe(role => this.role = role)
    }
  }
  onSubmit() {
    // je gebruikt in dit geval de methode waarmee je kan zeggen of iemand admin is of niet.
    if(this.user.username!=null) {
      if (this.role == 'admin') {
        this.userService.register(this.user)
      }
      else
      // Als je geen admin bent dan gebruik je de methode waarin je niet kan aangeven of iemand admin of guest is. De rol
      // is in dit geval altijd guest. Om te kunnen registreren via de loginpage moet een get methode public zijn. Door de
      // role bij dit route altijd op guest te zetten in de api wordt de beveiliging verbeterd.
      {
        this.userService.registerFromLoginPage(this.user)
      }
    }
    this.onNoClick()
  }
  onNoClick(): void {

    this.dialogRef.close();
  }
}
