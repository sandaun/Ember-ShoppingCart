import Controller from '@ember/controller';


export default Controller.extend({
  subTotalCheckout: 0,
  init() {
    this._super(...arguments);
  },  
  actions: { 
    async getSubTotals () {
      let coffeeSubTotal = 0, teaSubTotal = 0, strawberriesSubTotal = 0;

      await this.store.findRecord('product', 'CF1', { backgroundReload: false }).then(function(product) {
        let coffee = product.get('subTotalPrice');
        coffeeSubTotal = coffee;
      });
      await this.store.findRecord('product', 'GR1', { backgroundReload: false }).then(function(product) {
        let tea = product.get('subTotalPrice');
        teaSubTotal = tea;
      });
      await this.store.findRecord('product', 'SR1', { backgroundReload: false }).then(function(product) {
        let strawberries = product.get('subTotalPrice');
        strawberriesSubTotal = strawberries;
      });

      this.send('sumTotal', coffeeSubTotal, teaSubTotal, strawberriesSubTotal);
      
    },

    sumTotal (coffeeSubTotal, teaSubTotal, strawberriesSubTotal) {
      let totalCheckout = (coffeeSubTotal + teaSubTotal + strawberriesSubTotal).toFixed(2);
      this.set('subTotalCheckout', totalCheckout)
    }
    
  }
});