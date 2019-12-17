import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1>Diego's Very Simple To Do App</h1>
        <hr/>
        <div className='container-fluid'>
          <div className='row'>
            <TaskCreator />
            <TaskViewer />
          </div>
        </div>

      </div>
    );
  }
}

class TaskCreator extends Component {

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
            <button type='button' className='btn btn-success btn-block'>Add</button>
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

export default App;
