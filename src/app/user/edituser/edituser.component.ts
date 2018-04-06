import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../user.service';
import {User} from '../user';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user:User = new User();
  checked = false;
  role:string;
  selected = 'guest';
  public allUsers: Observable<User[]>;
  // selectedUser:User = new User;
  tempPassword:string
  constructor(private userService:UserService, public dialogRef: MatDialogRef<EdituserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any)
  {
    this.getUsers();
  }

  ngOnInit() {
    if (sessionStorage.getItem('admin') == null) {
      this.userService.currentRole.subscribe(role => this.role = role)
    } else {
      this.userService.changeRole(sessionStorage.getItem('role'))
      this.userService.currentRole.subscribe(role => this.role = role)
    }
  }
  getUsers() {
    this.allUsers = this.userService.getAll();
  }
  onSubmit() {
    if(this.user.username!=null)
    {
      console.log(this.tempPassword)
      this.user.password = this.tempPassword;
      console.log(this.user.password)
      this.userService.updateUser(this.user)
    }
    this.onNoClick()
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
