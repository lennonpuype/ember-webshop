import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked color = 'red';
  @tracked products = [];
  @tracked product = null;

  get productImage() {
    return `/assets/images/beats-solo-${this.color}.png`;
  }

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }

  constructor(props) {
    super(props);


    this.loadProduct();
    const model = this.get('model');
    console.log("MODEL", model);
  }

  loadProduct = async () => {
    const response = await fetch(`/assets/data/products.json`);
    const data = await response.json();
    const filteredProduct = data.products.filter(product => {
      return product.id === parseInt(this.model);
    })

    this.product = filteredProduct[0];
  }
}
