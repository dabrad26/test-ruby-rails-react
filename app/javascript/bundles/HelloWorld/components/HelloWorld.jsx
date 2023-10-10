import React from 'react';

export class HelloWorld extends React.Component {
  render() {
    const {users} = this.props;

    return (
      <div>
        <h1>Hello World! Here are current users</h1>
        <hr />
        <ul>
          {users.map((user, index) => <li key={index}>{user.name} (<a href={`mailto:${user.email}`}>{user.email}</a>)</li>)}
        </ul>
      </div>
    );
  }
}

export default HelloWorld;
