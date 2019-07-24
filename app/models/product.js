import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  id: DS.id,
  name: DS.attr(),
  price: DS.attr()
});