/**
 * TodoHeader Component
 * Acts a header component of the Todo application
 * {props}{string} title
 */

import React from 'react';
import PropTypes from 'prop-types';

export const TodoHeader = ({title}) => {
  return (
    <h1>{title}</h1>
  )
};

TodoHeader.propTypes = {
  title: PropTypes.string.isRequired
};
