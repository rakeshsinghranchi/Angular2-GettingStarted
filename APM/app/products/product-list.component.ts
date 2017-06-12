
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css']
    
})
export class ProductListComponent implements OnInit {
    
    constructor(private _productService:ProductService){}

    ngOnInit(): void {
        console.log("Product List Component Init()");
        this.products=this._productService.getProducts();
    }

    pageTitle: string = 'Product List here';
    imageWidth: number=30;
    imageMargin: number=3;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products:IProduct[];

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string):void
    {
        this.pageTitle = 'Product List - '+ message;

    }
}