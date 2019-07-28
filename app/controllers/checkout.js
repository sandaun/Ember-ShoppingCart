import Controller from '@ember/controller';


export default Controller.extend({
  subTotalCheckout: 0,
  init() {
    this._super(...arguments);
  },  
  actions: { 
    calculate (product) {

      let test = product.quantity * product.price;
      this.set('subTotalCheckout', test)
    }
    
  }
});