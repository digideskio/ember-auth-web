import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenRevocationEndpoint: '/users/sign_in'
});
