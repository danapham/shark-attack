import React, { Component } from 'react';
import LiveStudent from '../LiveStudent';
import studentData from '../../helpers/data/studentData';

export default class SharkTank extends Component {
  render() {
    const { students } = this.props;

    const renderStudents = () => (
      students.map((student) => (
        <LiveStudent key={student.id} student={student} />
      ))
    );

    return (
      <div>
        <h1>SharkTank</h1>
        {renderStudents()}
      </div>
    );
  }
}