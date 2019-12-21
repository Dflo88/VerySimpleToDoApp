import React from 'react';
import TaskListItem from './TaskListItem';

function TaskView(props) {
    const taskCount = Object.keys(props.currentState).length;
    console.log(props.currentState, 'prop check inside TaskView')
    if (taskCount > 0 ) {
      return <TaskListItem currentState={props.currentState}/>;
    } 
    return (
        <div className='container-fluid col-lg-8'>
            <div className='panel panel-default'>
                <div className='panel-heading'>View To Dos</div>
                <ul className='list-group'>
                <li className='list-group-item list-group-item-info'>
                    <p><b>Welcome to the Very Simple To Do App</b></p>
                    <p>Get started now by adding a new to do item to the left.</p>
                </li>
                </ul>
            </div>
        </div>
    );
  }

export default TaskView;