import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const text = 'Planeta ';
    const altText = text.concat(planetName);
    return (
      <div data-testid="planet-card" className="planets-div">
        <img src={ planetImage } alt={ altText } className={ planetName } />
        <p data-testid="planet-name" className="names-planet">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
