import React from 'react';

class TaskCreator extends React.Component {
    constructor(props) {
      super(props);
    }
    // the onClickHandler function will be creating a new task using the user input data
    // and storing the task in the App component state. Each task will exist as key:value 
    //pair in the state. The key will be equal to the task text and the value property is 
    // described above the taskProperty variable below.
    onClickHandler(){
      const taskKey = document.getElementById('setTaskText').value;
      const taskPriority = document.getElementById('setTaskPriority').value;
      // The taskProperty variable will be used to set the task priority ([0] position) and current
      // state of the view window in the task editior ([1] postion). By default the property will
      // be created with a view window value of "0". 
      if (taskKey.length > 0) {
        this.props.newTask(taskKey, taskPriority);
      } else {
        alert('Please enter some text to create this task!')
      };
      document.getElementById('setTaskText').value = '';
      document.getElementById('setTaskPriority').value = 1;
  
    }
    render() {
      return (
        <div className='container-fluid col-lg-4'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Add New To Do Item</div>
            <div className='panel-body'>
              <div className='form-group'>
                <label>I want to ...</label>
                <textarea id='setTaskText' className='form-control create-todo-text' rows='2'></textarea>
                <br/>
                <label>How much of a priority is this?</label>
                <select id='setTaskPriority' className='selectpicker form-control create-todo-priority'>
                  <option value='1'>High Priority</option>
                  <option value='2'>Medium Priority</option>
                  <option value='3'>Low Priority</option>
                </select>
              </div>
            </div>
            <div className='panel-footer'>
              <button type='button' className='btn btn-success btn-block' onClick={this.onClickHandler.bind(this)}>Add</button>
            </div>
          </div>
        </div>
      );
    }
  }

  export default TaskCreator

