import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/startup/simpl-schema-configuration.js';

Meteor.startup(() => {

    // WebApp.connectHandlers.use((req, res, next) => {
    //     // console.log('this is from my custom middlewre!');
    //     // console.log(req.url, req.method, req.headers, req.query);
    //      res.statusCode = 302;
    //      res.setHeader('Location', 'http://www.google.com');
    //     // res.write('<h1>Thissi my middleware at work!</h1>')
    //      res.end();
    
    // });
  
});
