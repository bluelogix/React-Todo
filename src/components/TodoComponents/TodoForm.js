import React from 'react';

function TodoForm(props) {
 
  return (
      <div className="todoForm">
        <form autocomplete="off" onSubmit={props.addNewTodo}>
        
        <input
            value={props.task}
            type="text"
            name="task"
            placeholder="Start Your Task List.."
            onChange={props.handleChanges}
        />
        
        <div>
        <button type="submit">Add Todo</button>
        <button onClick={props.clearCompleted} type="clearAll" >Clear Completed</button>
        </div>

        </form>
        
    </div>
  );
}

export default TodoForm;
