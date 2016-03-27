"use strict";

var React = require('react');

var About = React.createClass({
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
