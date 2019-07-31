import Component from '@ember/component';
// import { inject } from '@ember/service';


export default Component.extend({
  // store: inject(),

  // coffeeDiscounted: 0,
  // coffeePriceSubtotal: 0,
  // teaDiscount: 0,
  // strawberriesDiscount: 0,

  // didRender() {
  //   this.howMuchDiscount();
  // },

  // async howMuchDiscount () {
  //   let discountedPrice = 0
  //   let discountAmount = 0

  //   let coffeeQuant = await this.store.findRecord('product', 'CF1', { backgroundReload: false }).then(function(product) {
  //     return product.get('quantity');
  //   });
  //   let coffeePrice = await this.store.findRecord('product', 'CF1', { backgroundReload: false }).then(function(product) {
  //     return product.get('quantity');
  //   });
  //     discountedPrice = (coffeePrice * 2) / 3;
  //     discountAmount = (coffeePrice - discountedPrice) * coffeeQuant;
  //     this.coffeeDiscounted = discountAmount;
  //     this.coffeePriceSubtotal = discountedPrice * coffeeQuant;

  // },
});
