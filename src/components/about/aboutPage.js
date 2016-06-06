"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
      willTransitionTo: function(transition, params, query, callback) {
          // Can this page be transitioned to?
          if (!confirm('Are you sure you want to read a page that\'s this boring?')){
              transition.about();
          } else {
            callback();
          }
      },
      
      willTransitionFrom: function(transition, component) {
          // Can this page be transitioned to?
          if (!confirm('Are you sure you want to leave a page that\'s this exciting?')){
              transition.about();
          }
      }
    },
   render: function () {
       return (
            <div>
               <h2>About</h2>
               <p>
                    This application uses the following technologies:
                   <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Knockout</li>
                    <li>Web Forms</li>
                   </ul>
               </p>
            </div>
       );
   }
});

module.exports = About;
