/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../common/interfaces.d.ts" />

import * as React from 'react';

class ContactPage extends React.Component<IContactPageProps, IContactPageState> {

  constructor(props : IContactPageProps) {
    super(props);
    // http://realfiction.net/2015/08/27/Porting-a-react-application-to-typescript/
    this.state = { name: "Bob", address: "892 Main st.", phone: "0293-0394", favoriteColor: "Orange" };
  }

  public doSomething() {
    alert('Something!');
  }

  public render(): JSX.Element {
    return (
      <div className="contasct-page">
        <h1>This be the page for Contacts!</h1>
        <h2>{this.state.name}</h2>
        <p>Here's some texdt dabout this page!</p>
        <div>Your favorite color is {this.state.favoriteColor}</div>
      </div>
    );
  }
}

export = ContactPage;
