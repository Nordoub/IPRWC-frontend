import { Component, OnInit } from '@angular/core';
import {ProductService} from '../products/product.service';
import {Product} from '../products/product';
import {Observable} from 'rxjs/Observable';
import {User} from '../user/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public allProducts: Observable<Product[]>;
  step = 0;
  panelOpenState: boolean = false;
  // user:User = new User();
  selectedProduct: Product = new Product();
  product: Product = new Product();
  flairs = [
    {value: 'steak-0', viewValue: 'Manager'},
    {value: 'pizza-1', viewValue: 'Schoonmaker'},
    {value: 'tacos-2', viewValue: 'Software developer'}
  ];

  users = [
    {value: 'Naam1', viewValue: 'Naam1'},
    {value: 'Naam2', viewValue: 'Naam2'},
    {value: 'Naam3', viewValue: 'Naam3'}
  ];

  settings = {
    //actions: false,
    //mode: 'external',
    add: {confirmCreate: true},
    edit: {confirmSave: true},
    delete: {confirmDelete: true},
    pager: {
      display: true,
      perPage: 20
    },
    // public id?: number,
    // public omschrijving?: string,
    // public fabrikant?: string,
    // public gecheckt?: number,
    // public prijs?: number,
    // public product_gebruiker_id?: number,
    // public imgURL?: string,
    // public categorie?: string)
    columns: {
      omschrijving: {
        title: 'Omschrijving'
      },
      fabrikant: {
        title: 'Fabrikant'
      },
      // gecheckt: {
      //   title: 'gecheckt'
      // },
      prijs: {
        title: 'prijs'
      },
      // product_gebruiker_id: {
      //   title: 'toegevoegd door'
      // },
      imgURL: {
        title: 'url foto'
      },
      categorie: {
        title: 'categorie'
      }
    }
  };
  constructor(private productService:ProductService) {
    this.allProducts = this.productService.getAllProducts();
  }

  ngOnInit() {
    this.allProducts = this.productService.getAllProducts();
  }
  test () {
    console.log(this.allProducts)
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  onSelect(event): void {
    this.selectedProduct = event.data;
  }
}

