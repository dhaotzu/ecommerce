import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('shoppingCart') shoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }
  
  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }

  getQuantity(): number {
    let item = this.shoppingCart[this.product.productId];
    return item? item.quantity : 0;
  }
}
