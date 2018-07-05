/**
 * TodoCounter component
 */

import React from 'react';
import PropTypes from 'prop-types';

export const TodoCounter = ({count}) => {
  return (
    <p><span id="counter">{count}</span> remaining</p>
  );
};

TodoCounter.propTypes = {
  count: PropTypes.number.isRequired
};
