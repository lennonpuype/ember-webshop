import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ProductDetailsComponent extends Component {
  @action
  addProductToCart(product, color) {
    const order = { product, personalisation: { "color": color }, shortName: product.imageName + color }

    let orders = JSON.parse(sessionStorage.getItem('orders'));

    if (orders !== null) {
      orders = Array.from(JSON.parse(sessionStorage.getItem('orders')));
      orders.push(order);


      sessionStorage.setItem('orders', JSON.stringify(orders));
    } else {
      sessionStorage.setItem('orders', JSON.stringify(order));
    }

    console.log(orders);
  }
}
