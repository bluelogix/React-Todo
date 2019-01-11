import React from 'react'

import './Todo.css'

function Todo(props) {
    return (
      
            <p className={'task.completed' ? 'completed' : null }
            style={{ textDecorationLine: props.task.completed ? 'line-through' : '' }}
             onClick={e => props.toggleCompleted(props.task.id)}>{props.task.task}</p>
           
    
    )
}

// input checkbox
export default Todo;