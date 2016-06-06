"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

// This is how to use clean (HTML5 Location) routes
// Router.run(routes, Router.HistoryLocation, function(Handler) {
//   React.render(<Handler/>, document.getElementById('app'));
// });

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
