import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import Todo from './components/TodoComponents/Todo'

import './App.css'


// Buffer Todo list 

const listData= [
  { task: 'Laundry' , id: 1 , completed: false },
  { task: 'Clean Kitchen', id: 2 , completed: false },
  { task: 'Work on Plants', id: 3 , completed: false}
 
];


class App extends React.Component {
  constructor() {
    super();

    this.state = {
     data: listData,
     task: ''

    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  addNewTodo = e => {
    e.preventDefault();
    this.setState({
      data: [
        ...this.state.data,
        { task: this.state.task }
      ],
      task: ''
    });
  };

  // clearAll = e => {
  //   this.setState({ 

  //     task: []
  //   });
  // };
  

  render() {
    return (
      <div className="todoList">
        <div>
        <TodoList dataInformation={this.state.data} />
        </div>

        <div className="todoForm">
        <TodoForm 
        addNewTodo={this.addNewTodo}
        handleChanges={this.handleChanges}
        // clearAll={this.clearAll}
        task={this.state.task}
        />
        </div>

        {/* <Todo /> */}
      </div>
    );
  }
}

export default App;


// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state