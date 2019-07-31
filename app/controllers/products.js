import Controller from '@ember/controller';

export default Controller.extend({
  products: null, 
  init() {
    this._super(...arguments);
    this.set('products', []);
  },
  actions: { 
    addProduct(product) { 
      this.get('products').pushObject(product.name); 
      let cofCount = 0, teaCount = 0, strawCount = 0;
      this.products.forEach(product => {
        if (product === 'Coffee') {
          cofCount ++;
          this.store.findRecord('product', 'CF1', { backgroundReload: false }).then(function(product) {
            product.set('quantity', cofCount);
          });
        } else if (product === 'Green tea') {
          teaCount ++;
          this.store.findRecord('product', 'GR1', { backgroundReload: false }).then(function(product) {
            product.set('quantity', teaCount);
          });
        } else if (product === 'Strawberries') {
          strawCount ++;
          this.store.findRecord('product', 'SR1', { backgroundReload: false }).then(function(product) {
            product.set('quantity', strawCount);
          });
          
        }
      });

    }
  }
});