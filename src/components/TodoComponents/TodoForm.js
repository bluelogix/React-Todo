import React from 'react';

function TodoForm(props) {
 
  return (
      <div className="todoForm">
        <form onSubmit={props.addNewTodo}>
        
        <input
            value={props.task}
            type="text"
            name="task"
            placeholder="Input Task"
            onChange={props.handleChanges}
        />
        
        
        <button type="submit">Add Todo</button>
        <button type="clearAll">Clear Completed</button>
        </form>
    </div>
  );
}

export default TodoForm;
