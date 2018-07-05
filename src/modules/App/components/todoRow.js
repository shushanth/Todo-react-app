/**
 * TodoRow component
 */

import React from 'react';
import PropTypes from 'prop-types';

export const TodoRow = ({text, deleteTodo, index}) => {
  return (
    <div className="todo-item">
    {text}
    <span onClick={() => deleteTodo(index)}>&times;</span>
  </div>
  )
};

TodoRow.propTypes = {
  text: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
