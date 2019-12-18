import React, { Component } from 'react';

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
            <TaskViewer />
          </div>
        </div>
      </div>
    );
  }
}

class TaskCreator extends Component {
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
    const taskProperty = [taskPriority,0];
    if (taskKey.length > 0) {
      this.props.newTask(taskKey, taskProperty);
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

class TaskViewer extends Component {

  render() {
    return(
      <div className='container-fluid col-lg-8'>
        <div className='panel panel-default'>
          <div className='panel-heading'>View To Dos</div>
            <TaskListItem />
        </div>
      </div>
    );
  }
}

function CreateNewTaskMessage() {
  return(
        <div>
          <ul className='list-group'>
            <li className='list-group-item list-group-item-info'>
              <p><b>Welcome to the Very Simple To Do App</b></p>
              <p>Get started now by adding a new to do item to the left.</p>
            </li>
          </ul>
        </div>
  );
}

function TaskListItem(props) {
  return(
    <div>
      <ul className='list-group'>
        <li className='list-group-item list-group-item-success'>
          <div className='container'>
            <div className='row'>
              <div className='container-fluid col-lg-2'>
                <input type='checkbox'/>
              </div>
              <div className='container-fluid col-lg-4'>
                <p> test text</p>
              </div>
              <div className='container-fluid col-lg-2 btn-group'>
                <button type='button' className='btn btn-default btn-sm'>
                  <a className='glyphicon glyphicon-trash delete-todo'></a> 
                </button>
                <button type='button' className='btn btn-default btn-sm'>
                  <a className='glyphicon glyphicon-edit edit-todo'></a>
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className='list-group-item list-group-item-warning'>warning</li>
        <li className='list-group-item list-group-item-danger'>danger</li>
      </ul>
    </div>
  );
}

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

  const tasks = {};

export default App;
