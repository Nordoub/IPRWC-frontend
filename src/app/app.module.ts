import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {AppRoutingModule} from './app-routing.module';
// import {AuthAdminGuard} from '../auth-admin-guard.service';
// import {AuthGuard} from '../auth-guard.service';
import {AuthorizationService} from '../authorization.service';
import { HeaderComponent } from './shared/header/header.component';
import { LeftmenuComponent } from './shared/leftmenu/leftmenu.component';
import { RightmenuComponent } from './shared/rightmenu/rightmenu.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {UserService} from './user/user.service';
import {AuthGuard} from './auth-guard.service';
import {AuthAdminGuard} from './auth-admin-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    LeftmenuComponent,
    RightmenuComponent,
    LoginComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    UserService,
    AuthorizationService,
    AuthGuard,
    AuthAdminGuard,
    AppRoutingModule,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
