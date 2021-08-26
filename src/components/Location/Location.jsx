import React from 'react';
import { ReactComponent as LocationIcon } from '../../asset/map-marker-alt-solid.svg';

import './Location.styles.scss';

const Location = ({ location }) => (
  <div className="location">
    <LocationIcon className="location-icon" />
    <div className="location-city">{ location }</div>
  </div>
);

export default Location;
