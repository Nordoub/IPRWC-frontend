import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../user/user.service';
import {User} from '../../user/user';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  step = 0;
  constructor(public router: Router, private userService:UserService) { }

  ngOnInit() {

  }

  navigate() {
    this.router.navigate(['products']);

  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
