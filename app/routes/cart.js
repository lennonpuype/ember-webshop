import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

export default class CartRoute extends Route {
  @tracked orders;

  model() {
    const orders = JSON.parse(sessionStorage.getItem('orders'));
    if (orders !== null) {
      const totalPrices = orders.map(order => {
        if (order.product.discount !== null) {
          const discountPrice = order.product.price * (order.product.discount / 100)
          return { price: order.product.price - discountPrice };
        } else {
          return { price: order.product.price };
        }
      })

      const items = totalPrices;
      return items;
    }

  }

  setupController(controller, model) {
    const orders = JSON.parse(sessionStorage.getItem('orders'));


    const uniqueOrders = [...new Map(orders.map(order => [order.shortName, order])).values()]

    uniqueOrders.map(uniqueOrder => {
      const amount = orders.filter(order => {
        return order.shortName === uniqueOrder.shortName
      })

      uniqueOrder = { ...uniqueOrder, amount: amount.length }
    })

    controller.set('model', model);

    if (orders !== null) {
      controller.set('orders', uniqueOrders);
    }
  }
}
