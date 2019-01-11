import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
// import Todo from './components/TodoComponents/Todo'

import './App.css'




// Buffer Todo list 

const listData= [
  { task: 'Laundry' , id: 0, completed: false },
  { task: 'Clean Kitchen', id: 1, completed: false },
  { task: 'Work on Plants', id: 2 , completed: false}
 
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
        { task: this.state.task, id: Date.now(),completed: false }
      ],
      task: ''
    });
  };

  toggleCompleted = id => {
    this.setState({
      data: this.state.data.map(task => {
        if(task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        } return task;
      })

      
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      data: this.state.data.filter(task => !task.completed)
    });
  };
  
  

  render() {
    return (
      <div className="todoList">

      <div>
      
      <h2>Welcome to OnTask <i class="fas fa-check-double"></i></h2>
      </div>
      <div className="formList">
          <TodoForm 
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
          clearCompleted={this.clearCompleted}
          />
        </div>

        <div className="dataInfo">
          <TodoList toggleCompleted ={this.toggleCompleted } dataInformation={this.state.data} />
          </div>

        {/* <p>Follow Us: </p> */}
          <div className="footer">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>

        

  
      </div> //todoList
    );
  }
}

export default App;


// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state