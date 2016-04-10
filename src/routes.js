"use strict";

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

// Note: In React Router, if you don't define a path, then the name is
// also the path (as in authors and about below)

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name="authors" handler={require('./components/authors/authorPage')} />
    <Route name="about" handler={require('./components/about/aboutPage')} />
    <Route name="contact" handler={require('./components/contact/contactPage')} />
  </Route>
);

module.exports = routes;
