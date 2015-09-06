// app/routes/application.js
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel() {
    if (!window.location.hostname.match(/^localhost/)) {
      Ember.$('head link[href="http://bootswatch.com/flatly/bootstrap.css"]').attr("href", "http://bootswatch.com/cerulean/bootstrap.css");
    }
  },
});
