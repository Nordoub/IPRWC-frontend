import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../user/user.service';
import {ProductService} from './product.service';
import {User} from '../user/user';

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

  constructor(private userService:UserService, private productService:ProductService) { }

  ngOnInit() {
    this.allProducts = this.productService.getAllProducts();
    console.log(this.allProducts)
  }

}
