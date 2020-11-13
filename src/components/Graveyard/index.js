import React, { Component } from 'react';
import studentData from '../../helpers/data/studentData';
import Gravestone from '../Gravestone';

export default class Graveyard extends Component {
  render() {
    const { students } = this.props;
    const renderStudents = () => (
      students.map((student) => (
        <Gravestone key={student.id} student={student}/>
      ))
    );

    return (
      <div>
        <h1>Graveyard</h1>
        {renderStudents()}
      </div>
    );
  }
}
