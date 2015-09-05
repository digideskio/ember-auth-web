import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),
  scopes: service('session-scopes'),
  isUserAuthenticated: 'lol',

  actions: {
    isUserAuthenticated: function() {
      console.log('herrreeee');
      this.get('scopes').isUserAuthenticated();
    },
    hello: function() {
      var texto = this.get('scopes').hello();
      return texto;
    }
  }
});
