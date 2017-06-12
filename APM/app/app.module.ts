import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import 'rxjs/Rx';

import { AppComponent }  from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";

@NgModule({
  imports: [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent,ProductListComponent,ProductFilterPipe,StarComponent ],
  bootstrap: [ AppComponent ],
  providers:[ProductService]
})
export class AppModule { }
