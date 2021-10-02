import { Component, OnInit } from '@angular/core';
import {Product} from '../../../core/schema/product';
import {ProductService} from '../../../core/service/productservice';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];


  constructor(private productService: ProductService,
              private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    // this.productService.getProductsSmall().subscribe(resp => {
    //   console.log(resp.data);
    //   this.products = resp.data;
    // });
    this.productService.getProductsSmall().then(cars => this.products = cars);
    this.primengConfig.ripple = true;
  }

}
