import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),
  scopes: service('session-scopes'),

  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      var scopes = this.get('scopes');
      var session = this.get('session')
      // working
      // return this.get('session').authenticate('authenticator:user', data);
      return session.authenticate('authenticator:manager', data).then(function() {
        console.log(session);
        scopes.login(session, 'manager');
        console.log(scopes);
        console.log(scopes.scopes);
      }, function() {
        // authentication failed
      });
    }
  }
});
