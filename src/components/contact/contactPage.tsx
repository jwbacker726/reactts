/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../common/interfaces.d.ts" />

import * as React from 'react';

module Todo {
  export class ContactPage extends React.Component<IContactPageProps, IContactPageState> {

    constructor(props : IContactPageProps){
      super(props);
      this.state = { name: "Bob" };
    }

    public render() {
      return (
        <div className="contasct-page">
          <h1>This be the page for Contacts!</h1>
          <h2>{this.state.name}</h2>
          <p>Here's some texdt dabout this page!</p>
        </div>
      );
    }
  }
}

export = Todo.ContactPage;
