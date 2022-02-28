import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount: DiscountOffers;
  StoreName:string;
  StoreLogo:string;
  ProductList : IProduct;
  CategoryList : ICategory;
  ClientName:string;
  isPurchased:boolean ;
  
  constructor() {
    this.Discount = DiscountOffers['No Discount'];
    this.StoreName = "XSHOP";
    this.StoreLogo = "Hola";
    this.ProductList = {};
    this.CategoryList = {};
    this.ClientName = "ahmed";
    this.isPurchased = true;
   }

  ngOnInit(): void {
  }

}
