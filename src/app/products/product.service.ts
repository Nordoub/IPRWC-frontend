/**
 * Created by School on 10-3-2018.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {ApiService} from '../shared/api.service';
import {AuthorizationService} from '../shared/authorization.service';
import {Product} from './product';


@Injectable()
export class ProductService {

  // allUsers$: Observable<User>;


  constructor(private api: ApiService, private authService: AuthorizationService, private router: Router) {

  }

  public getAllProducts(): Observable<Product[]> {
    return this.api.get<Product[]>('products')
  }
}
