export default function() {
  this.namespace = '/api';

  this.get('/products', function() {
    return {
      data: [{
        type: 'product',
        id: 'GR1',
        attributes: {
          name: 'Green tea',
          price: 3.11,
        }
      }, {
        type: 'product',
        id: 'SR1',
        attributes: {
          name: 'Strawberries',
          price: 5.00,
        }
      }, {
        type: 'product',
        id: 'CF1',
        attributes: {
          name: 'Coffee',
          price: 11.23,
        }
      }]
    };
  });
}

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
