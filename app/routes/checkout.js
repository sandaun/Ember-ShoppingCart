import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.store.findAll('product');
  },
  afterModel(model) {
    console.log('this is aftermodel in checkout route')
  }
});
