import React, { Component } from 'react';
 
class TaskCompressedView extends Component {
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
                <li className={taskPriorityClass}>
                    <div className='container'>
                        <div className='container-fluid col-lg-2'>
                            <input type='checkbox'/>
                        </div>
                        <div className='container-fluid col-lg-4'>
                            <p>{this.props.text}</p>
                        </div>
                        <div className='container-fluid col-lg-2 btn-group'>
                            <button type='button' className='btn btn-default btn-sm glyphicon glyphicon-trash delete-todo' name='delete' id={this.props.text} onClick={this.clickHandler.bind(this)}></button>
                            <button type='button' className='btn btn-default btn-sm glyphicon glyphicon-edit edit-todo' name='editWindow' id={this.props.text} onClick={this.clickHandler.bind(this)}></button>
                        </div>
                    </div>
                </li>
            </div>    
        );
    }

}
export default TaskCompressedView