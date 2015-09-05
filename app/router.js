import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('panel', function() {
    this.route('login');
    this.route('logout');
  });
  this.route('admin', function() {
    this.route('login');
    this.route('logout');
  });
  this.route('manager', function() {
    this.route('login');
    this.route('logout');
  });
});

export default Router;
