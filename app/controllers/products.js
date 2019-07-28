import Controller from '@ember/controller';


export default Controller.extend({
  products: null, 
  productFlag: 0,
  init() {
    this._super(...arguments);
    this.set('products', []);
  },
  actions: { 
    addProduct(product) { 
      this.get('products').pushObject(product.name); 
      let cofCount = 0, teaCount = 0, strawCount = 0;
      this.products.forEach(element => {
        if (element === 'Coffee') {
          cofCount ++;
          this.store.findRecord('product', 'CF1', { backgroundReload: false }).then(function(product) {
            product.set('quantity', cofCount);
          });
        } else if (element === 'Green tea') {
          teaCount ++;
          this.store.findRecord('product', 'GR1', { backgroundReload: false }).then(function(product) {
            product.set('quantity', teaCount);
          });
        } else if (element === 'Strawberries') {
          strawCount ++;
          this.store.findRecord('product', 'SR1', { backgroundReload: false }).then(function(product) {
            product.set('quantity', strawCount);
          });
          
        }
      });

    }
  }
});