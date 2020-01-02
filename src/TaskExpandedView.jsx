import React, { Component } from 'react';

class TaskExpandedView extends Component {
    constructor(props){
        super(props);
    }

    clickHandler(event){
        this.props.clickHandler(event);
    }
    render(){
        let taskPriorityClass ;

        switch (Number(this.props.priority)) {
            case 1:
                taskPriorityClass = 'list-group-item list-group-item-danger';
                break;
            case 2:
                taskPriorityClass = 'list-group-item list-group-item-warning';
                break;
            case 3:
                taskPriorityClass = 'list-group-item list-group-item-success';
                break;
            default:
                break;
        }
        return(
            <div>
                <ul className='list-group'>
                    <li className={taskPriorityClass}>
                        <div className='form-group'>
                        <label>Description</label>
                        <textarea id='editTaskText' className='form-control update-todo-text' rows='2' defaultValue={this.props.text}></textarea>
                        <br/>
                        <label>Priority</label>
                        <select id='editTaskPriority' className='selectpicker form-control update-todo-priority' defaultValue={this.props.priority}>
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

}

export default TaskExpandedView