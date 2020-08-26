import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked products = [];

  constructor(props) {
    super(props);

    this.loadProducts()
  }

  loadProducts = async () => {
    const response = await fetch(`/assets/data/products.json`);
    const data = await response.json();
    this.products = data.products;
  }
}
