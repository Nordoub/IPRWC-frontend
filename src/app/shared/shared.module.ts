import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationService} from './authorization.service';
import {ApiService} from './api.service';
import {UserService} from '../user/user.service';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {ProductService} from '../products/product.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,MatCheckboxModule,
    MatMenuModule
  ],
  declarations: [],
  providers: [
    ApiService,
    AuthorizationService,
    UserService,
    ProductService

  ],
})

export class SharedModule {

}
