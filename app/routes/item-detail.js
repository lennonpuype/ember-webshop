import Route from '@ember/routing/route';

export default class ItemDetailRoute extends Route {
  model(params) {
    const { item_id } = params;
    return item_id
  }
}
