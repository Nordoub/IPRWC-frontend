import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {WinkelwagenService} from './winkelwagen.service';
import {Observable} from 'rxjs/Observable';
import {Product} from '../product';


@Component({
  selector: 'app-winkelwagen',
  templateUrl: './winkelwagen.component.html',
  styleUrls: ['./winkelwagen.component.css']
})
export class WinkelwagenComponent implements OnInit {

  public products: Product[] = [];
  total$: Observable<number>;
  constructor(
    public dialogRef: MatDialogRef<WinkelwagenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private winkelwagenService:WinkelwagenService, public snackBar: MatSnackBar) {
    // this.winkelwagenService.products.subscribe(products => this.products = products)
    this.products =  this.winkelwagenService.products;
    this.total$ = this.winkelwagenService.total$;
  }

  notification() {

    this.snackBar.openFromComponent(BestellingmessageComponent, {
      duration: 1000,
    });
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  clearCart() {
    this.winkelwagenService.clearCart();
    this.products = [];
  }
  ngOnInit() {
  }

}
@Component({
  selector: 'app-bestellingmessage',
  template: '<p>Uw bestelling is voltooid.</p>',
  styles: [`.example-pizza-party { color: hotpink; }`],
})
export class BestellingmessageComponent {}

