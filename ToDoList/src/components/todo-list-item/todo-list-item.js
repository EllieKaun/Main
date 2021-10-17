import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ id, label, onImportantChange, onTodoDelete, onDoneChange ,important = false, done }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
    fontDecoration: done ? 'line-through' : 'normal'
  };

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        onClick={() => onDoneChange(id)}
        style={style}>
        {label}
      </span>
    
      <button type="button"
              onClick={() => onImportantChange(id)}
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              onClick={() => onTodoDelete(id)}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;