import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import { browserHistory } from 'react-router';
import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simpl-schema-configuration.js';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId(); //truty boolean
  const currentPagePrivacy = Session.get('currentPagePrivacy');

  onAuthChange(isAuthenticated,currentPagePrivacy);
});


Tracker.autorun( () => {
  const selectedNoteId = Session.get('selectedNoteId');

  if (selectedNoteId) {
    browserHistory.replace(`/dashboard/${selectedNoteId}`);
  }

});
Meteor.startup(() => {
  Session.set('selectedNoteId', undefined);
  ReactDOM.render(routes, document.getElementById('app'));
});

