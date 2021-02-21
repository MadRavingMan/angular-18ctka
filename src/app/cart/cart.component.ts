import { Component } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  items = this.cartService.getItems();

  clearCart(){
    this.cartService.clearCart();
    window.alert("del");
  }

  constructor(private cartService: CartService) {}
}
