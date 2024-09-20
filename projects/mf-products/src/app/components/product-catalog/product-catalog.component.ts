import { Component } from '@angular/core';
import { ResponseProducts } from '../../models/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent {
  products: ResponseProducts[];

  constructor(private productsService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getAll().subscribe(
      (response: ResponseProducts[]) => {
        this.products = response;
      }
    )
  }
}
