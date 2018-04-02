import { Component, OnInit } from '@angular/core';
import {ProductService} from '../products/product.service';
import {Product} from '../products/product';
import {Observable} from 'rxjs/Observable';
import {User} from '../user/user';
import {AdduserComponent} from '../user/adduser/adduser.component';
import {EdituserComponent} from '../user/edituser/edituser.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public allProducts: Observable<Product[]>;
  step = 0;
  id:string;
  panelOpenState: boolean = false;
  // user:User = new User();
  selectedProduct: Product = new Product();
  product: Product = new Product();
  // flairs = [
  //   {value: 'steak-0', viewValue: 'Manager'},
  //   {value: 'pizza-1', viewValue: 'Schoonmaker'},
  //   {value: 'tacos-2', viewValue: 'Software developer'}
  // ];
  //
  // users = [
  //   {value: 'Naam1', viewValue: 'Naam1'},
  //   {value: 'Naam2', viewValue: 'Naam2'},
  //   {value: 'Naam3', viewValue: 'Naam3'}
  // ];

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
  constructor(private productService:ProductService, public dialog:MatDialog) {
    // this.allProducts = this.productService.getAllProducts();
  }

  ngOnInit() {
    this.getAllProducts()
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

  productToevoegen(event) {
    this.product = event.newData;
    // console.log(this.product.id)
    // console.log(this.product.omschrijving)
    // console.log(this.product.product_gebruiker_id)
    // console.log(this.product.categorie)
    // console.log(this.product.fabrikant)
    // console.log(this.product.gecheckt)
    // console.log(this.product.imgURL)
    // console.log(this.product.prijs)
    // console.log(this.id)

    if (window.confirm(('Weet je zeker dat je dit product wilt toevoegen?'))) {
      event.confirm.resolve();
      this.productService.addProduct(this.product)
    } else {
      event.confirm.reject();
      window.alert('Product is niet toegevoegd.')
    }
   }

  editProduct(event){
    //this.productService.editProduct(this.selectedProduct);
    if (window.confirm(('Weet je zeker dat je dit product wilt aanpassen?'))) {
      event.confirm.resolve();
      this.product = event.newData;
      this.productService.editProduct(this.product);
    } else {
      event.confirm.reject();
      window.alert('Product is niet aangepast.')
    }
  }

  productVerwijderen(event) {
    //this.productService.deleteProduct(this.selectedProduct)
    if (window.confirm(('Weet je zeker dat je dit product wilt deleten?'))) {
      event.confirm.resolve();
      this.product = event.data;
      this.productService.deleteProduct(this.product)
    } else {
      event.confirm.reject()
      window.alert('Product is niet verwijderd.');
    }

  }
  getAllProducts()    {
    this.allProducts = this.productService.getAllProducts();
  }

  openAddUser(): void {
    let dialogRef = this.dialog.open(AdduserComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openEditUser(): void {
    let dialogRef = this.dialog.open(EdituserComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

