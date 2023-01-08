import React, { Component } from 'react';
import Title from './Title';
import MissioCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions-div">
        <Title headline="Missões" />
        <div>
          { missions.map((mission) => (
            <MissioCard
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
              key={ mission.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
