/**
 * @shushanth
 * App component
 * root level component
 */

import React from 'react';
import { render } from 'react-dom';

export const TodoApp = ({name}) => {
  return (
    <div>
      {name}
    </div>
  )
};

TodoApp.defaultProps = {
  name: 'todos'
}

/**
 * render App
 * TODO : use utils helpers
 */
const rootDiv = document.createElement('div');
rootDiv.id = "root";
document.body.appendChild(rootDiv);
render(<TodoApp />, document.querySelector('#root'));

