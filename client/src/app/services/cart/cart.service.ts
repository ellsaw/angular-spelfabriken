import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Cart {
  sum: number,
  items: {
    id: number,
    quantity: number
  }[]
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartChangeSubject = new BehaviorSubject<void>(undefined);
  cartChange = this.cartChangeSubject.asObservable();
  
  getCart(): Cart {
    const storage = localStorage.getItem('cart');
    if (storage) {
      return JSON.parse(storage);
    } else {
      return { sum: 0, items: [] };
    }
  }

  private saveCart(cart: Cart): void {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartChangeSubject.next();
  }

  addToCart(id: number, price: number): void {
    const cart = this.getCart();
    cart.sum += price;
    cart.items.push({id: id, quantity: 1});
    this.saveCart(cart);
  }

  removeFromCart(id: number, price: number): void{
    let cart = this.getCart();
    const removedItem = cart.items.filter((item) => item.id === id)[0]

    cart.items = cart.items.filter((item) => item.id !== removedItem.id)
    cart.sum = cart.sum - (price * removedItem.quantity)

    this.saveCart(cart);
  }

  increaseQuantity(id: number, price: number): void {
    let cart = this.getCart();
    cart.items = cart.items.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item);
    cart.sum = cart.sum + price;

    this.saveCart(cart);
  }

  decreaseQuantity(id: number, price: number): void {
    let cart = this.getCart();

    cart.items = cart.items.map((item) => item.id === id ? {...item, quantity: item.quantity - 1} : item);
    cart.sum = cart.sum - price;

    this.saveCart(cart);
  }

  checkIfInCart(id: number): boolean{
    const cart = this.getCart()

    const control = cart.items.filter((item) => item.id === id)[0]

    if(control){
      return true;
    }else {
      return false;
    }
  }
}
