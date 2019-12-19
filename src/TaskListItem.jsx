import React from 'react';

function TaskListItem(props) {
    console.log(props.currentState, 'array check')
    console.log(Object.keys(props.currentState), 'testing inside of TaskListItem');
    return(
      <div className='container-fluid col-lg-8'>
        <div className='panel panel-default'>
        <div className='panel-heading'>View To Dos</div>
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
  
                  {/* {
                    this.props.currentState.map(function(item, i){
                      console.log(item);
                      return <p key={i}>Test</p>
                    })
                  } */}
                  {/* {
                    
          this.props.currentState.map(text => (
            <IndividualTask
              key={i}
              text={item}
              taskPriority={tasks.description}
              location={tasks.location} 
            />
          ))
                    } */}
                </div>
              </div>
            </li>
            <li className='list-group-item list-group-item-warning'>warning</li>
            <li className='list-group-item list-group-item-danger'>danger</li>
          </ul>
        </div>
      </div>
    ); 
  }

export default TaskListItem