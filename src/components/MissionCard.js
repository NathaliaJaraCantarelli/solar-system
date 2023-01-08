import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissioCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card-style">
        <p data-testid="mission-name" className="name-class"><strong>{ name }</strong></p>
        <div className="mission-card-button">
          <i className="gg-calendar-today" />
          <p data-testid="mission-year" id="year-class">{ year }</p>
          <i className="gg-pin" />
          <p data-testid="mission-country" id="country-class">{ country }</p>
          <i className="gg-flag" />
          <p data-testid="mission-destination" id="destin-class">{ destination }</p>
        </div>
      </div>
    );
  }
}

MissioCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissioCard;
