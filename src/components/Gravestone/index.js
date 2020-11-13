import React, { Component } from 'react';

export default class Gravestone extends Component {
  render() {
    const { student } = this.props;
    return (
      <div>
        <p>{student.firstName} {student.lastName}</p>
      </div>
    );
  }
}
