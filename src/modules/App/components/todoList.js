/**
 * TodoList component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  TodoCounter,
  TodoRow,
  TodoForm
} from 'Components';

export const TodoList = ({state, methods}) => {
  const { todos } = state;
  const { deleteTodo, addTodo } = methods;
  const count = todos.length;
  return(
    <div>
      <TodoCounter {...{count}}></TodoCounter>
      <div>
      {
        todos.length ?
        todos.map((todo, index) =>
        <TodoRow
            text={todo.text}
            key={todo.id}
            {...{index, deleteTodo}}>
        </TodoRow>)
        : 'You\'re all done 🌴'
      }
      </div>
      <TodoForm {...{addTodo}}></TodoForm>
    </div>
  );
};

TodoList.propsType = {
  state: PropTypes.object,
  methods: PropTypes.object
};
