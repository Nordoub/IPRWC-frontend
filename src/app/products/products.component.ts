import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../user/user.service';
import {ProductService} from './product.service';
import {User} from '../user/user';
import {MatSnackBar} from '@angular/material';
import {WinkelwagenService} from './winkelwagen/winkelwagen.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // public id?: number,
  // public omschrijving?: string,
  // public fabrikant?: string,
  // public gecheckt?: string,
  // public prijs?: string,
  // public product_gebruiker_id?: string,
  // public imgURL?: string)
  public allProducts: Observable<Product[]>;
  user = new User(1, 'root','root','norddin','-','oubahman','test@hotmail.com','admin');
  total$: Observable<number>;
  constructor(private userService:UserService, private productService:ProductService, public snackBar: MatSnackBar,
              private winkelwagenService:WinkelwagenService) {
    this.allProducts = this.productService.getAllProducts();
    this.total$ = winkelwagenService.total$
  }

  ngOnInit() {
    this.allProducts = this.productService.getAllProducts();
    console.log(this.allProducts)
    // console.log(this.userService.IsUserLoggedIn)
  }
  notification(product:Product) {
    this.winkelwagenService.addItem(product);
    this.snackBar.openFromComponent(MessageComponent, {
      duration: 1000,
    });

  }
  // addItem(product:Product){
  //   this.winkelwagenService.addItem(product);
  // }
}
@Component({
  selector: 'app-message',
  template: '<p>Product is aan uw winkelwagen toegevoegd.</p>',
  styles: [`.example-pizza-party { color: hotpink; }`],
})
export class MessageComponent {}
