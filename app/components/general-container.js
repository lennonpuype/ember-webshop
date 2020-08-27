import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GeneralContainerComponent extends Component {
  @tracked cartAmount = JSON.parse(sessionStorage.getItem('orders')).length;


}
