import Ember from 'ember';

export default Ember.Service.extend({
  isUserAuthenticated: false,
  isAdminAuthenticated: false,
  isManagerAuthenticated: false,

  login(session, scope) {
    this.logout();
    this.set('is' + scope.capitalize() + 'Authenticated', true);
  },

  logout() {
    this.set('isUserAuthenticated', false);
    this.set('isAdminAuthenticated', false);
    this.set('isManagerAuthenticated', false);
  },
});