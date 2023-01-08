import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <link href="https://css.gg/calendar-today.css" rel="stylesheet" />
        <link href="https://css.gg/pin.css" rel="stylesheet" />
        <link href="https://css.gg/flag.css" rel="stylesheet" />
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
