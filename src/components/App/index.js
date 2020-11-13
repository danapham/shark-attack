import React from 'react';
import './App.scss';
import studentData from '../../helpers/data/studentData';
import SharkTank from '../SharkTank';
import Graveyard from '../Graveyard';

export default class App extends React.Component {
  state = {
    alives: [],
    deads: [],
  }

  componentDidMount() {
    this.loadAlives();
    this.loadDeads();
  }

  componentDidUpdate() {
    this.loadAlives();
    this.loadDeads();
  }

  loadAlives = () => studentData.livingStudents().then((res) => {
    this.setState({
      alives: res,
    });
  });

  loadDeads = () => studentData.dearlyBeloved().then((res) => {
    this.setState({
      deads: res,
    });
  });

  sharkAttack = () => {
    const randomStudent = this.state.alives[Math.floor(Math.random() * this.state.alives.length)];
    studentData.followTheLight(randomStudent.id);
    this.loadAlives();
    this.loadDeads();
  };

  render() {
    const { alives, deads } = this.state;

    return (
      <div className="App">
        <button className="btn btn-info" onClick={this.sharkAttack}>Shark Attack</button>
        <SharkTank students={alives} />
        <Graveyard students={deads} />
      </div>
    );
  }
}
