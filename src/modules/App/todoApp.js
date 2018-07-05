/**
 * App component
 * root level component
 */

import React from 'react';
import { render } from 'react-dom';

import './styles.css';

//components
import { TodoHeader } from 'Components';

export const TodoApp = ({name}) => {
  return (
    <div className="todo-list">
      <TodoHeader title={name}></TodoHeader>
    </div>
  )
};

TodoApp.defaultProps = {
  name: 'todos'
};

/**
 * render App
 * TODO : use utils helpers
 */
const rootDiv = document.createElement('div');
rootDiv.id = "root";
document.body.appendChild(rootDiv);
render(<TodoApp />, document.querySelector('#root'));

