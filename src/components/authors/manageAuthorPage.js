"use strict";

var React = require("react");
var AuthorForm = require("./authorForm");

var ManageAuthorPage = React.createClass({
  getInitialState: function() {
    return {
      author: { id: '', firstName: '', lastName: '' }
    }
  },

  render: function() {
    return (
      <div>
        <AuthorForm
          author={this.state.author}
         />
      </div>
    );
  }
});

module.exports = ManageAuthorPage;
