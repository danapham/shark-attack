import React, { Component } from 'react';

export default class LiveStudent extends Component {
  state = { }

  render() {
    const { student } = this.props;
    return (
      <div>
        <p>{student.firstName} {student.lastName}</p>
      </div>
    );
  }
}
