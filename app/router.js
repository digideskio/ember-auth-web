import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout', function() {
    this.route('panel');
    this.route('admin');
    this.route('manager')
  });
  this.route('login', function() {
    this.route('panel');
    this.route('admin');
    this.route('manager')
  });
  this.route('panel');
  this.route('admin');
  this.route('manager');
});

export default Router;
