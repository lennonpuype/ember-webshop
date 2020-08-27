import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

export default class ItemRoute extends Route {

  model = async (params) => {
    const { item_id } = params;

    return item_id
  }

  setupController = async (controller, model) => {
    const { product, color } = await this.loadProduct(model);
    controller.set('product', product);
    controller.set('color', color);
  }

  loadProduct = async (id) => {
    const response = await fetch(`/assets/data/products.json`);
    const data = await response.json();
    const filteredProduct = data.products.filter(product => {
      return product.id === parseInt(id);
    })

    return { product: filteredProduct[0], color: filteredProduct[0].options[0].colors[0] };
  }
}
