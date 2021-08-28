import React from 'react';
// import { Link } from 'react-router-dom';
import ChevronLeft from '../../asset/chevron-left-solid.svg';

import './GoBack.styles.scss';

const GoBack = ({
  onDetailClick,
}) => (
  <button type="button" onClick={onDetailClick}>
    {/* <Logo className="back-logo" /> */}
    <img className="test" src={ChevronLeft} alt="back" />
  </button>
);

export default GoBack;
