import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';


const TodoList = ({ todos, onImportantChange, onTodoDelete, onDoneChange }) => {

  const elements = todos.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem {...item } onImportantChange={onImportantChange} onTodoDelete={onTodoDelete} onDoneChange={onDoneChange} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
