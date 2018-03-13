import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    private role;
    private username;

    protected debug = false //if debug is true you are allowed on all the pages. without credentials
    constructor(private router: Router) {
        this.debug = false;
    }


    canActivate() {
        if (!this.debug) {
            return this.isLoggedin();
        }else{return this.debug}
    }

    public isLoggedin(): boolean {

        let authorizationString = sessionStorage.getItem('authorization');
        let firstName = sessionStorage.getItem('firstName');
        let username = sessionStorage.getItem('userName');
        let role = sessionStorage.getItem('role');

        if (authorizationString === null) {
            authorizationString = localStorage.getItem('authorization');
            firstName = localStorage.getItem('firstName');
            role = localStorage.getItem('role');
        }
        if (authorizationString === null ||firstName === null || role === null ){
            this.router.navigate(['login']);
            return false

        }else{
            this.role = role;
            this.username = username;
            return true
        }
    }

    public getRole() :string{
        return this.role;
    }
    public getRouter() :Router{
        return this.router;
    }
    public getUsername() :string{
        return this.username;
    }





}
