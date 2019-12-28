import React, { Component } from 'react';
import IndividualTask from './IndividualTask';


class TaskListItem extends Component {
    constructor(props) {
        super(props);
    }

    render(){
 
        const taskValue = Object.values(this.props.currentState);
        const taskProperties = Object.values(this.props.currentState);
        return (
            <div className='container-fluid col-lg-8'>
              <div className='panel panel-default'>
              <div className='panel-heading'>View To Dos</div>
                <ul className='list-group'>
                    {
                        taskValue.map(task => (
                        <IndividualTask
                        key={task[3]}
                        text={task[0]}
                        priority={task[1]}
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



