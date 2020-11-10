import React from 'react';
import './App.scss';
import studentData from '../helpers/data/studentData';

class App extends React.Component {
  render() {
    studentData.getData().then((res) => console.warn(res));
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">I am a button</button>
      </div>
    );
  }
}

export default App;
