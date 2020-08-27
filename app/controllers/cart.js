import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @tracked orders = [];

  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price
    }, 0);
  }

  get tax() {
    return Number(0.21 * this.subtotal).toFixed(2);
  }

  get total() {
    return parseInt(this.subtotal) + parseInt(this.tax)
  }

  @action
  eraseOrder(order, index) {
    try {
      const orders = JSON.parse(sessionStorage.getItem('orders'));
      orders.splice(index, 1);
      sessionStorage.setItem('orders', JSON.stringify(orders));

      this.orders = orders

      if (orders !== null) {
        const totalPrices = orders.map(order => {
          if (order.product.discount !== null) {
            const discountPrice = order.product.price * (order.product.discount / 100)
            return { price: order.product.price - discountPrice };
          } else {
            return { price: order.product.price };
          }
        })

        this.model = totalPrices;
      }

    } catch (error) {
      console.log(error);
    }

  }
}
