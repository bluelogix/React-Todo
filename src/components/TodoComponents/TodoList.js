// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react';

// import Todo from './components/TodoComponents/Todo'


import Todo from './Todo'

function TodoList(props) {
  return (
    <div>
      {props.dataInformation.map(task => {
        return <Todo toggleCompleted={props.toggleCompleted} task={task} />;
      })}
    </div>
  );
}

export default TodoList;

// function TodoList(props) { ORIGINAL

//     return (
//       <div className="lists">
//         {props.dataInformation.map(mapOfItems => {
//         return <div>{mapOfItems.task}</div>;
//         })}
//       </div>
//     );
   
//   }
  
//   export default TodoList;

//   function TodoList(props) {
//     // do more stuff here
//     return (
//       <div>
//         {props.dataInformation.map((mapOfItems, index) => {
//           return (
//             <Todo
//               index={index}
//               toggleTask={props.toggleTask}
//               mapOfItems={mapOfItems}
//               key={mapOfItems.id}
//             />
//           );
//         })}
//       </div>
//     );
//     }
//     export default TodoList;