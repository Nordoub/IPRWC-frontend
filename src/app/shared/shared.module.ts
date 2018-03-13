/**
 * Created by School on 11-3-2018.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationService} from './authorization.service';
import {ApiService} from './api.service';
import {UserService} from '../user/user.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ApiService,
    AuthorizationService,
    UserService

  ],
})

export class SharedModule {

}
