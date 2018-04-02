import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {WinkelwagenService} from './winkelwagen.service';
import {Observable} from 'rxjs/Observable';
import {Product} from '../product';


@Component({
  selector: 'app-winkelwagen',
  templateUrl: './winkelwagen.component.html',
  styleUrls: ['./winkelwagen.component.css']
})
export class WinkelwagenComponent implements OnInit {

  private products: Product[] = [];
  total$: Observable<number>;
  constructor(
    public dialogRef: MatDialogRef<WinkelwagenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private winkelwagenService:WinkelwagenService) {
    // this.winkelwagenService.products.subscribe(products => this.products = products)
    this.products =  this.winkelwagenService.products;
    this.total$ = this.winkelwagenService.total$;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}


