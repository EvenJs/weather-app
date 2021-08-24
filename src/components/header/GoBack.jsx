import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../asset/chevron-left-solid.svg';

import './GoBack.styles.scss';

const GoBack = () => (
  <Link to="/">
    <Logo className="back-logo" />
  </Link>
);

export default GoBack;
