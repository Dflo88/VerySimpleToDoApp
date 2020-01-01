import React, { Component } from 'react';
import IndividualTask from './IndividualTask';


class TaskListItem extends Component {
    constructor(props) {
        super(props);
    }
    // deleteId(taskId){
    //     this.props.deleteId(taskId);
    // }
    clickHandler(event){
        this.props.clickHandler(event);
    }

    render(){
        const taskObject = Object.values(this.props.currentState);
        const taskText = Object.keys(...Object.values(this.props.currentState));
        return (
            <div className='container-fluid col-lg-8'>
              <div className='panel panel-default'>
              <div className='panel-heading'>View To Dos</div>
                <ul className='list-group'>
                    {
                        taskText.map(task => (
                        <IndividualTask clickHandler={this.clickHandler.bind(this)}
                        key={task}
                        text={task}
                        priority={taskObject[0][task][0]}
                        editWindow={taskObject[0][task][1]}
                        />   
                        ))
                    }
                </ul>
              </div>
            </div>
          ); 
    };
}

export default TaskListItem;



