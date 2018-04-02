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

  constructor(private userService:UserService, public dialogRef: MatDialogRef<EdituserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any)
  {
    this.getUsers();
  }

  ngOnInit() {
    // this.user.role = 'guest';
  }
  getUsers() {
    this.allUsers = this.userService.getAll();
  }
  onSubmit() {
    if(this.user.username!=null) {this.userService.updateUser(this.user)}
    this.onNoClick()
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
