import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Basket, IBasket, IBasketItem, IBasketTotals } from '../shared/models/basket';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/models/product';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basketSoure = new BehaviorSubject<IBasket>(null);
  private basketTotalSource = new BehaviorSubject<IBasketTotals>(null);
  baseUrl = environment.apiUrl;
  basket$ = this.basketSoure.asObservable();
  basketTotal$ = this.basketTotalSource.asObservable();
  shipping = 0;

  constructor(private http: HttpClient) { }

  createPaymentIntent() {
    return this.http.post(this.baseUrl + 'payments/' + this.getCurrentBasketValue().id, {})
      .pipe(map((basket: IBasket) => {
        this.basketSoure.next(basket);
      }));
  }

  setShippingPrice(dm: IDeliveryMethod) {
    this.shipping = dm.price;
    const basket = this.getCurrentBasketValue();
    basket.deliveryMethodId = dm.id;
    basket.shippingPrice = dm.price;
    this.calculateTotals();
    this.setBasket(basket);
  }

  getBasket(id: string) {
    return this.http.get(this.baseUrl + 'basket?id=' + id)
      .pipe(
        map((basket: IBasket) => {
          this.basketSoure.next(basket);
          this.shipping = basket.shippingPrice;
          this.calculateTotals();
        })
      );
  }

  setBasket(basket: IBasket) {
    return this.http.post(this.baseUrl + 'basket', basket)
      .subscribe((response: IBasket) => {
        this.basketSoure.next(response);
        this.calculateTotals();
      }, error => {
        console.log(error);
      });
  }

  getCurrentBasketValue() {
    return this.basketSoure.value;
  }

  addItemToBasket(item: IProduct, quantity = 1) {
    const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(item, quantity);
    const basket = this.getCurrentBasketValue() ?? this.createBasket()

    basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
    this.setBasket(basket);
  }

  incrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket.items.findIndex(x => x.id == item.id);
    basket.items[foundItemIndex].quantity++;
    this.setBasket(basket);
  }

  decrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
    
    if (basket.items[foundItemIndex].quantity > 1) {
      basket.items[foundItemIndex].quantity--;
      this.setBasket(basket);
    } else {
      this.removeItemFromBasket(item);
    }
  }

  removeItemFromBasket(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();

    if (basket.items.some(x => x.id === item.id)) {
      basket.items = basket.items.filter(i => i.id !== item.id);

      if (basket.items.length > 0) {
        this.setBasket(basket);
      } else {
        this.deleteBasket(basket);
      }
    }
  }

  deleteLocalBasket(id: string) {
    this.basketSoure.next(null)
    this.basketTotalSource.next(null);
    localStorage.removeItem('basket_id');
  }

  deleteBasket(basket: IBasket) {
    return this.http.delete(this.baseUrl + 'basket?id=' + basket.id).subscribe(() => {
      this.basketSoure.next(null);
      this.basketTotalSource.next(null);
      localStorage.removeItem('basket_id');
    }, error => {
      console.log(error);
    })
  }

  private calculateTotals() {
    const basket = this.getCurrentBasketValue();
    const shipping = this.shipping;
    const subTotal = basket?.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
    const total = shipping + subTotal;
    this.basketTotalSource.next({shipping, subTotal, total});
  }

  private addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);

    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }

    return items;
  }

  private createBasket(): IBasket {
    const basket = new Basket();

    localStorage.setItem('basket_id', basket.id)

    return basket;
  }

  private mapProductItemToBasketItem(item: IProduct, quantity: number): IBasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      brand: item.productBrand,
      type: item.productType
    }
  }
}
