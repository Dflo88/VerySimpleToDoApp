import React, { Component } from 'react';
import IndividualTask from './IndividualTask';


class TaskListItem extends Component {
    constructor(props) {
        super(props);

    }
    
    render(){
        console.log(Object.values(this.props.currentState), 'testing inside of TaskListItem values');
        console.log(Object.keys(this.props.currentState).length, 'testing for length of object')
        // console.log(this.props.currentState, 'object check');
        console.log(Object.keys(this.props.currentState), 'testing inside of TaskListItem keys');
        const taskText = Object.keys(this.props.currentState);
        const taskProperties = Object.values(this.props.currentState);
        return (
            <div className='container-fluid col-lg-8'>
              <div className='panel panel-default'>
              <div className='panel-heading'>View To Dos</div>
                <ul className='list-group'>
                    {
                        taskText.map(text => (
                        <IndividualTask
                        key={text.id}
                        text={text}
                        />   
                        ))
                    }
                  <li className='list-group-item list-group-item-warning'>warning</li>
                  <li className='list-group-item list-group-item-warning'>warning</li>
                  <li className='list-group-item list-group-item-danger'>danger</li>
                </ul>
              </div>
            </div>
          ); 
    };
}

export default TaskListItem;



