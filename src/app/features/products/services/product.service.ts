import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {  ProductsResponse } from "../models/products.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private catalogUrl = environment.catalogEndpoint;

    constructor(private http: HttpClient) {}
    
    // imageSrc(filename: string) {
    //   // add breakpoint check for the other size
    //   const folder = this.breakpointObserver.isMatched(Breakpoints.Handset) ? '270x270' : '500x500';
    //   return `${this.imageUrl}/images/${folder}/${filename}`;
    // }
    
    // getFilters(): Observable<SearchQuery> {
    //     return this.http.get<SearchQuery>(`${this.baseUrl}/filters`);
    // }

    getProducts(): Observable<ProductsResponse> {
        return this.http.get<ProductsResponse>(`${this.catalogUrl}/products`);
    }

    // getProduct(id: string): Observable<Product> {
    //     return this.http.get<Product>(`${this.catalogUrl}/products/${id}`);
    // }

    // getFilteredProducts(page: number, searchQuery: SearchQuery): Observable<ProductsResponse> {
    //     const { searchTerm, category, brand, minPrice, maxPrice } = searchQuery;
    //     let params = new HttpParams();

    //     if (page) {
    //       params = params.set('page', page.toString());
    //     }
    
    //     if (searchTerm) {
    //       params = params.set('searchTerm', searchTerm);
    //     }
    //     if (category) {
    //       params = params.set('category', category);
    //     }
    //     if (brand) {
    //       params = params.set('brand', brand);
    //     }
    //     if (minPrice && maxPrice) {
    //       params = params.set('minPrice', minPrice.toString());
    //       params = params.set('maxPrice', maxPrice.toString());
    //     }
    
    //     return this.http.get<ProductsResponse>(`${this.baseUrl}/products`, { params });
    // }
};