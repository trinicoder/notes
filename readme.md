# Boilerplate Meteor v1.7 project

# Meteor v1.7,testing




# Packages
{

"name": "Notes",

"private": true,

"scripts": {

"start": "meteor run",

"test": "meteor test --driver-package=cultofcoders:mocha",

"test-app": "TEST_WATCH=1 meteor test --full-app --driver-package meteortesting:mocha",

"visualize": "meteor --production --extra-packages bundle-visualizer"

},

"dependencies": {

"@babel/runtime": "^7.0.0-beta.48",

"meteor-node-stubs": "^0.4.1",

"moment": "^2.22.2",

"prop-types": "^15.6.1",

"react": "^16.7.0",

"react-addons-pure-render-mixin": "^15.6.2",

"react-dom": "^16.7.0",

"react-router": "^3.0.0",

"simpl-schema": "^1.5.0"

},

"devDependencies": {

"enzyme": "^3.8.0",

"enzyme-adapter-react-16": "^1.7.1",

"expect": "^1.20.2",

"react-addons-test-utils": "^15.6.2"

}

}
