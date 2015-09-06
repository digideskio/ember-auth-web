import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),
  scopes: service('session-scopes'),

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    },
    hello: function() {
      var texto = this.get('scopes').hello();
      return texto;
    }
  }
});
