import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
// import {AuthAdminGuard} from '../auth-admin-guard.service';
// import {AuthGuard} from '../auth-guard.service';
import { HeaderComponent } from './shared/header/header.component';
import { LeftmenuComponent } from './shared/leftmenu/leftmenu.component';
import { RightmenuComponent } from './shared/rightmenu/rightmenu.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {UserService} from './user/user.service';
import {AuthGuard} from './auth-guard.service';
import {AuthAdminGuard} from './auth-admin-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthorizationService} from './shared/authorization.service';
import {ApiService} from './shared/api.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ProductService} from './products/product.service';
import { BestellingComponent } from './products/bestelling/bestelling.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    LeftmenuComponent,
    RightmenuComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    BestellingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,

    // MatDividerModule



  ],
  providers: [
    ApiService,
    UserService,
    AuthorizationService,
    AuthGuard,
    AuthAdminGuard,
    AppRoutingModule,
    LoginComponent,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
