/**
 * Created by School on 10-3-2018.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
// import {ApiService} from '../shared/api.service';
// import {AuthorizationService} from '../shared/authorization.service';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Product} from '../product';


@Injectable()
export class WinkelwagenService {
  public products: Product[] = [];

  private total = new BehaviorSubject<number>(0);
  // allUsers$: Observable<User>;


  constructor() {

  }

  get total$(){
    return this.total.asObservable();
  }

  calcTotal(){
    let sum = 0;
    this.products.forEach(product => {
      sum += product.prijs;
    });
    return sum;
  }

  addItem(product: any){
    this.products.push(product);
    this.total.next(this.calcTotal());
    //save to localStore
  }

  removeItem(product: Product){
  }
  clearCart() {
    this.products = [];
    this.total.next(0)
  }
}
