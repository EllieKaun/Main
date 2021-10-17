import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddTodo from '../item-add-todo';

import './app.css';

class App extends React.Component {

  state = {
    todos: [
      { label: 'Drink Coffee', important: false, id: 1, done: false },
      { label: 'Make Awesome App', important: true, id: 2, done: true },
      { label: 'Have a lunch', important: false, id: 3, done: true }
    ],
    search: '',
    status: 'all'
  }

  onDoneChange = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)

      const oldTodo = oldState.todos[idx];
      const newTodo = {...oldTodo, done: !oldTodo.done}

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const newState = {
        todos: [...prev, newTodo, ...next]
      }

      return newState
    
    })
  }

  onTodoAdd = (text) => {
    this.setState((oldState) => {
      const sortedIdsArr = oldState.todos.map((item) => item.id).sort((a, b) => a>b)
      const myNewId = sortedIdsArr[sortedIdsArr.length - 1] + 1;

      const myNewTodo = {
        label: text,
        important: false,
        id: myNewId,
        done: false
      }

      const newState = {
        todos: [...oldState.todos, myNewTodo]
      }

      return newState
    })
  }

  onImportantChange = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)

      const oldTodo = oldState.todos[idx];
      const newTodo = {...oldTodo, important: !oldTodo.important}

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const newState = {
        todos: [...prev, newTodo, ...next]
      }


      return newState
    })
  }

  onTodoDelete = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)  

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const newState = {
        todos: [...prev, ...next]
      }

      return newState
    })
  }

  onSearch = (text) => {
    this.setState({
      search: text
    })
  }

  search = (todos, template) => {
    if (!template) {
      return todos
    }
    return todos.filter((item) => item.label.toLowerCase().includes(template.toLowerCase()))
  }

  doneSort = () => {
    let numx = this.state.todos
    numx = numx.length
   
    let thisIsAll = this.state.todos
    let thisIsId = this.state.todos.map((item) => item.id)
    let thisIsDone = this.state.todos.map((item) => item.done)

    for (let i = 0; i < numx+1; i++) {
      if ((thisIsDone[i] === true && thisIsId[i] === i)) {
      return thisIsAll[i]
    }
    else{
      console.log('no');
    }
    
  }
  }

  //   doneSort = (done) => {
  //     this.setState((oldState) => {
  //     const donex = oldState.todos.filter((item) => item.done)  
  //     return donex
  //     }
  
  // )}


  render() {
    const newTodos = this.search(this.state.todos, this.state.search)

    const doneTodos = this.state.todos.filter((item) => item.done === true)
    const activeTodos = this.state.todos.filter((item) => item.done === false)

    console.log(this.doneSort());

    return (
      
      <div className="todo-app">

        <AppHeader toDo={activeTodos.length} done={doneTodos.length} />

        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter 
          doneSort={this.doneSort} 
          />
        </div>

        <TodoList
          todos={newTodos}
          onImportantChange={this.onImportantChange}
          onTodoDelete={this.onTodoDelete}
          onDoneChange={this.onDoneChange}
        />

    

        <ItemAddTodo onTodoAdd={this.onTodoAdd} />

      </div>
    )
  }
}

export default App;
