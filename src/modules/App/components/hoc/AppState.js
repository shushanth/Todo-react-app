/**
 * App state component
 * provides state to component
 */

import React, { Component } from 'react';
import { uniqueId } from 'lodash';

import {
  bindable,
  removeItemInArray
} from 'Utils/helpers';

export class AppState extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{text: 'Add your first todo', id: uniqueId()}]
    };
  }

  addTodo(value) {
    //Add todo...
  };

  deleteTodo(index) {
    //delete todo//
  };

  render() {
    const { children } = this.props;
    const injectedProps = {
      state: this.state,
      methods: bindable(this, ['addTodo', 'deleteTodo'])
    };
    let newChildren = React.Children.map(children, child => React.cloneElement(child, injectedProps));
    return (
      <div>{newChildren}</div>
    );
  }
};
