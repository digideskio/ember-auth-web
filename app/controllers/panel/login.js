import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),

  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      // return this.get('session').authenticate('simple-auth-authenticator:devise', data);
      return this.get('session').authenticate('authenticator:user', data);
    }
  }
});
