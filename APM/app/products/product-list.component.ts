
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
        this._productService.getProducts()
        .subscribe(
            products=> this.products = products,
            error => this.errorMessage = <any>error);
    }

    pageTitle: string = 'Product List here';
    imageWidth: number=30;
    imageMargin: number=3;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products:IProduct[];
    errorMessage: string;

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string):void
    {
        this.pageTitle = 'Product List - '+ message;

    }
}