import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthGuard} from './auth-guard.service';

@Injectable()
export class AuthAdminGuard extends AuthGuard implements CanActivate {
    constructor(router: Router){
        super(router);}
    canActivate() {
if(!this.debug){
        if( this.isLoggedin()){
            return this.isAdmin()
        } else {
            return false
        }}else {
    return this.debug
}
    }

    isAdmin():boolean{
        if (this.getRole() == 'admin') {
            return true
        } else {
            console.log('Access denied')
           this.getRouter().navigate(['']);
            return false
        }
    }

}
