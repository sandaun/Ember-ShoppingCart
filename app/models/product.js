import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({
  id: DS.id,
  name: DS.attr(),
  price: DS.attr(),
  quantity: DS.attr(),
  discount: DS.attr(),
  subTotalPrice: computed('price', 'quantity', 'discount', function() {
    let discountedPrice = 0;
    let discountAmount = 0;
    // let extraQuantity = 0
    if (this.id === 'CF1' && this.quantity >= 3) {
      discountedPrice = (this.price * 2) / 3;
      discountAmount = (this.price - discountedPrice) * this.quantity;
      this.set('discount', discountAmount);
      return discountedPrice * this.quantity;
    } else if (this.id === 'SR1' && this.quantity >= 3) {
        discountedPrice = this.price - 0.5;
        discountAmount = (this.price - discountedPrice) * this.quantity;
        this.set('discount', discountAmount);
        return discountedPrice * this.quantity;
    } else if (this.id === 'GR1') {
        let getOneFree = 0;
        getOneFree = Math.ceil(this.quantity / 2 * 1);
        console.log(getOneFree);
        discountAmount = getOneFree;
        this.set('discount', getOneFree);
        // this.set('quantity', extraQuantity)
        return this.price * (this.quantity );
      }
    return this.price * this.quantity;
  }),

});