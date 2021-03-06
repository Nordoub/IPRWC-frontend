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
import {User} from '../user/user';
import {UserService} from '../user/user.service';


@Injectable()
export class ProductService {

  // allUsers$: Observable<User>;

  user:User;
  constructor(private api: ApiService, private authService: AuthorizationService, private router: Router, private userService:UserService) {
    this.userService.getMe().subscribe(user => this.user = user)
  }

  public getAllProducts(): Observable<Product[]> {
    return this.api.get<Product[]>('products')
  }
  public addProduct(product: Product): void {
    let data = {
      omschrijving: product.omschrijving,
      fabrikant: product.fabrikant,
      gecheckt: '1',
      prijs: product.prijs,
      product_gebruiker_id: this.user.id, /*parseInt(sessionStorage.getItem('id')),*/
      imgURL: product.imgURL,
      categorie: product.categorie,
    };

    this.api.post('products', data)
      .subscribe(


        data => {
          alert('Het toevoegen is gelukt');
        },
        error =>{
          alert('Het toevoegen is niet gelukt');
        }
      )
  }
  public deleteProduct(product:Product) {
    this.api.delete<void>('products/delete', {omschrijving: product.omschrijving, fabrikant: product.fabrikant})
      .subscribe(
        (response) => alert('Product successfully deleted.'),
        (error) => alert('Product is niet verwijderd')
      );
  }

  public editProduct(product: Product): void {
    let data = {
      //id: product.id,
      omschrijving: product.omschrijving,
      fabrikant: product.fabrikant,
      gecheckt: '1',
      prijs: product.prijs,
      product_gebruiker_id: this.user.id,
      imgURL: product.imgURL,
      categorie: product.categorie,
    };

    this.api.put<void>('products/edit', data).subscribe
    (
      data => {
        alert('Het aanpassen is gelukt');
      },
      error =>{
        alert('Het aanpassenis niet gelukt');
      }
    );
  }
}
