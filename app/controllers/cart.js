import Controller from '@ember/controller';

export default class CartController extends Controller {
  get subtotal() {
    //Model uit de route wordt hier uitgelezen en omgezet naar een waarde die je kan oproepen in de .hbs
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  get tax() {
    return 0.21 * this.subtotal
  }

  get total() {
    return this.subtotal + this.tax
  }
}
