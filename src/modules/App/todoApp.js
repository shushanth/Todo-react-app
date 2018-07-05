/**
 * App component
 * root level component
 */

import React from 'react';
import { render } from 'react-dom';
import { AppState } from 'Components/HOC';

import { createDOMElement } from 'Utils/helpers';

import './styles.css';

//components
import {
  TodoList,
  TodoHeader
} from 'Components';

export const TodoApp = ({name}) => {
  return (
    <div className="todo-list">
      <TodoHeader title={name}></TodoHeader>
      <AppState>
        <TodoList></TodoList>
      </AppState>
    </div>
  )
};

TodoApp.defaultProps = {
  name: 'todos'
};

/**
 * render App
 */
const rootElement = createDOMElement('div').create();
render(<TodoApp/>, rootElement);

