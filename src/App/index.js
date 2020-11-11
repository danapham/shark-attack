import React from 'react';
import './App.scss';
import studentData from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    alives: [],
    deads: [],
  }

  render() {
    studentData.livingStudents().then((res) => this.setState({
      alives: res,
    }));

    studentData.dearlyBeloved().then((res) => this.setState({
      deads: res,
    }));

    // const { students } = this.state;
    // const displayStudents = () => (
    //   students.map((student) => (
    //     console.warn(students)
    //   ))
    // );

    return (
      <div className="App">
        <button className="btn btn-info">Shark Attack</button>
      </div>
    );
  }
}

export default App;
