import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simpl-schema-configuration.js';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId(); //truty boolean
  onAuthChange(isAuthenticated);
});



Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});

