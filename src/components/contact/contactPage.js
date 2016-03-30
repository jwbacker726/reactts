"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ContactPage = (function (_super) {
    __extends(ContactPage, _super);
    function ContactPage(props) {
        _super.call(this, props);
        this.state = { name: "Bob", address: "892 Main st.", phone: "0293-0394", favoriteColor: "Orange" };
    }
    ContactPage.prototype.doSomething = function () {
        alert('Something!');
    };
    ContactPage.prototype.render = function () {
        return (React.createElement("div", {className: "contasct-page"}, React.createElement("h1", null, "This be the page for Contacts!"), React.createElement("h2", null, this.state.name), React.createElement("p", null, "Here's some texdt dabout this page!"), React.createElement("div", null, "Your favorite color is ", this.state.favoriteColor)));
    };
    return ContactPage;
}(React.Component));
module.exports = ContactPage;
