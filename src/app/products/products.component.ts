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

  // public allProducts: Observable<Product[]>;
  allProducts: Product[];
  total$: Observable<number>;
  constructor(private userService:UserService, private productService:ProductService, public snackBar: MatSnackBar,
              private winkelwagenService:WinkelwagenService) {
    this.productService.getAllProducts().subscribe(data => this.allProducts = data);


    this.total$ = winkelwagenService.total$
  }

  ngOnInit() {
    // this.allProducts = this.productService.getAllProducts();
    // console.log(this.userService.IsUserLoggedIn)
  }
  notification(product:Product) {
    this.winkelwagenService.addItem(product);
    this.snackBar.openFromComponent(MessageComponent, {
      duration: 1000,
    });

  }

}
@Component({
  selector: 'app-message',
  template: '<p>Product is aan uw winkelwagen toegevoegd.</p>',
  styles: [`.example-pizza-party { color: hotpink; }`],
})
export class MessageComponent {}
