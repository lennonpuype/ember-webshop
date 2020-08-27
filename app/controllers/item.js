import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked color = '';
  @tracked products = [];
  @tracked product = null;


  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }

  constructor(props) {
    super(props);
    this.loadProduct();
  }

  loadProduct = async () => {
    const response = await fetch(`/assets/data/products.json`);
    const data = await response.json();
    const filteredProduct = data.products.filter(product => {
      return product.id === parseInt(this.model);
    })
    this.product = filteredProduct[0];
  }

  get discountedPrice() {
    if (this.product.discount !== null) {
      const discount = this.product.price * (this.product.discount / 100);
      const price = this.product.price - discount;
      return price;
    } else {
      return false;
    }
  }
}
