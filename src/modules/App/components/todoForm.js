/**
 * TodoForm component
 */

import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = ({addTodo, placeholder = '...'}) => {
  //TODO: use recompose to manage state
  //used hacky way as below
  let oldInputValue = '';
  const handleChange = (event) => {
    const { value } = event.target;
    oldInputValue = value;
  };
  const getUpdatedValue = () => {
    return oldInputValue
  };
  return (
    <div className="todo-input">
      <input onChange={handleChange} placeholder={placeholder} type="text"/>
      <button onClick={() => oldInputValue && addTodo(getUpdatedValue())}>
        Add
      </button>
    </div>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func,
  placeholder: PropTypes.string
};
