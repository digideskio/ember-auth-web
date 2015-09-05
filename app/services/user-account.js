import DS from 'ember-data';
import Ember from 'ember';

const { inject, computed, isEmpty } = Ember;

export default Ember.Service.extend({
  session: inject.service('session'),

  account: computed('session.content.secure.account_id', function() {
    const accountId = this.get('session.content.secure.account_id');
    if (!isEmpty(accountId)) {
      return DS.PromiseObject.create({
        promise: this.container.lookup('store:main').find('account', accountId)
      });
    }
  })
});
