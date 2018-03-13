/**
 * Created by School on 7-3-2018.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {AppComponent} from './app.component';
import {AuthAdminGuard} from './auth-admin-guard.service';
import {AuthGuard} from './auth-guard.service';

// import {AuthGuard} from "./auth-guard.service";
// import {AuthAdminGuard} from "./auth-admin-guard.service";


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthAdminGuard] },
  { path: '', component: ProductsComponent},
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}

