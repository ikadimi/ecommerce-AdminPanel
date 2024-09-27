import { Component } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { Observable } from 'rxjs';
import { ProductsResponse } from '../models/products.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  productsResponse$: Observable<ProductsResponse>;
  constructor(private productsService: ProductsService) {
    this.productsResponse$ = this.productsService.getProducts();
  }

  ngOnInit() {}

  navigateToProduct(productId: string) {
    // this.router.navigate(['/admin/products', productId]);
  }

  editProduct(productId: string) {
    // this.router.navigate(['/admin/products', productId, 'edit']);
  }

  deleteProduct(productId: string) {
    // this.router.navigate(['/admin/products', productId, 'delete']);
  }
}
