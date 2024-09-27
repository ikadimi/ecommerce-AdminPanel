import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductssRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductssRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  declarations: [ProductsComponent, ProductListComponent]
})

export class ProductsModule { }