import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../SharedClasses&Types/enums';
import { ICategory, IProduct } from '../SharedClasses&Types/interfaces';
// import {  } from '../SharedClasses&Types/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount: DiscountOffers;
  StoreName:string;
  StoreLogo:string;
  ProductList : IProduct[];
  CategoryList : ICategory[];
  ClientName:string;
  isPurchased:boolean ;
  
  constructor() {
    this.Discount = DiscountOffers['10%'] ;
    this.StoreName = "XSHOP";
    this.StoreLogo = "../../assets/logo.jpg";
    this.ProductList = [
      {ID:1, Name:'', Quantity:10, Price:15000, Img:''},
      {ID:2, Name:'Iphone 11', Quantity:15, Price:11000, Img:''},
      {ID:3, Name:'Lenovo Labtop', Quantity:14,Price:10000,Img:''},
    ];
    this.CategoryList = [
      {ID:1, Name:'Phones'},
      {ID:2, Name:'Labtops'},
      {ID:3, Name:'Headphones'}
    ];
    this.ClientName = "ahmed";
    this.isPurchased = true;
   }

  ngOnInit(): void {
  }

}
