import React, { Component } from 'react';
import TaskCreator from './TaskCreator';
import TaskView from './TaskView';

class App extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      'todos' : []
    }
  }

  createNewTask(task,priority){
    const newTaskObject = {[task] : [priority,false]}
    const newStateValue = Object.assign({}, this.state.todos, newTaskObject);
    this.setState({'todos': newStateValue});
  }

  clickHandler(event){

    if (event.target.name == 'delete'){
      let updatedState = Object.assign({}, this.state['todos']);
      delete updatedState[event.target.id];
      this.setState({'todos' : updatedState});
    } else if (event.target.name == 'editWindow'){
        let stateChange = this.state.todos[event.target.id].slice(0,1);
        let updatedState = Object.assign({}, this.state['todos']);
        switch (this.state.todos[event.target.id][1]){
          
          case false:
            stateChange.push(true);
            updatedState[event.target.id] = stateChange;
            this.setState({'todos' : updatedState});
            break;
          
          case true:
            stateChange.push(false);
            updatedState[event.target.id] = stateChange;
            this.setState({'todos' : updatedState});
            break;
        }
    } else if (event.target.name == 'saveButton'){
        const taskTextEdit = document.getElementById('editTaskText').value;
        const taskPriorityEdit = document.getElementById('editTaskPriority').value;
        let updatedState = Object.assign({}, this.state['todos']);
        
        if (event.target.id == taskTextEdit){
          updatedState[event.target.id] = [taskPriorityEdit, false];
          this.setState({'todos' : updatedState});

        } else {
          delete updatedState[event.target.id];
          updatedState[taskTextEdit] = [taskPriorityEdit, false];
          this.setState({'todos' : updatedState});
        }


    } else {
      console.log('not working!!!')
    }
  }

  render() {
  
    return (
      <div className='container'>
        <h1>Diego's Very Simple To Do App</h1>
        <hr/>
        <div className='container-fluid'>
          <div className='row'>
            <TaskCreator newTask={this.createNewTask.bind(this)}/>
            <TaskView currentState={this.state} clickHandler={this.clickHandler.bind(this)}/>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
