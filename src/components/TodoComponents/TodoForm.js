import React from 'react';

function TodoForm(props) {
 
  return (
    <form onSubmit={props.addNewCharacter}>
    
      <input
        value={props.task}
        type="text"
        name="task"
        placeholder="Input Task"
        // onChange={props.handleChanges}
      />
      
    
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
