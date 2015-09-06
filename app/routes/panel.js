import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel(transition) {
    let superResult = this._super(transition);

    if (!this.get('session.isAuthenticated')) {
      transition.abort();
      this.get('session').set('attemptedTransition', transition);
      Ember.assert('The route configured as Configuration.authenticationRoute cannot implement the AuthenticatedRouteMixin mixin as that leads to an infinite transitioning loop!', this.get('routeName') !== 'login.panel');
      this.transitionTo('login.panel');
    }

    return superResult;
  }
});