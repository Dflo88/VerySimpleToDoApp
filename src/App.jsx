import React, { Component } from 'react';
import TaskCreator from './TaskCreator';
import TaskView from './TaskView';



class App extends Component {
  constructor(props) {
    super(props);
     
    this.state = {}
  }

  createNewTask(task,priority){
    this.setState({[task]: priority});
    console.log(Object.keys(this.state).length, 'state length');
    console.log(this.state, 'current state')
  }
  render() {
    return (
      <div className='container'>
        <h1>Diego's Very Simple To Do App</h1>
        <hr/>
        <div className='container-fluid'>
          <div className='row'>
            <TaskCreator newTask={this.createNewTask.bind(this)}/>
            <TaskView currentState={this.state}/>
          </div>
        </div>
      </div>
    );
  }
}

// class TaskViewer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log(this.props.currentState);
//     return(
//       <div className='container-fluid col-lg-8'>
//         <div className='panel panel-default'>
//           <div className='panel-heading'>View To Dos</div>
//             <CreateNewTaskMessage /> 
//         </div>
//       </div>
//     );
//   };
// }


// 
// function IndividualTask(props) {
//   console.log(props.text)
//   return(
//     <div>
//       <div className='container-fluid col-lg-2'>
//         <input type='checkbox'/>
//       </div>
//       <div className='container-fluid col-lg-4'>
//         <p> props.</p>
//       </div>
//       <div className='container-fluid col-lg-2 btn-group'>
//         <button type='button' className='btn btn-default btn-sm'>
//           <a className='glyphicon glyphicon-trash delete-todo'></a> 
//         </button>
//         <button type='button' className='btn btn-default btn-sm'>
//           <a className='glyphicon glyphicon-edit edit-todo'></a>
//         </button>
//       </div>
//     </div>

// 	);
// }

function TaskEditWindow(props) {
  return(
    <div>
      <ul className='list-group'>
          <li className='list-group-item list-group-item-success'>
            <div className='form-group'>
              <label>Description</label>
              <textarea id='editTaskText' className='form-control update-todo-text' rows='2'>Set prop value in here</textarea>
              <br/>
              <label>Priority</label>
              <select id='editTaskPriority' className='selectpicker form-control update-todo-priority'>
                <option value='1'>High Priority</option>
                <option value='2'>Medium Priority</option>
                <option value='3'>Low Priority</option>
              </select><br/>
              <button type='button' className='btn btn-success btn-sm update-todo'>Save</button>
            </div>
          </li>
      </ul>
    </div>
    );
  }

export default App;
