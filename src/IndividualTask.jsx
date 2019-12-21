import React from 'react';

function IndividualTask(props) {
      console.log(props, 'text inside of individual tasks')
      return(
        <div>
            <li className='list-group-item list-group-item-success'>
                <div className='container'>
                    {/* <div className='row'> */}
                        <div className='container-fluid col-lg-2'>
                            <input type='checkbox'/>
                        </div>
                        <div className='container-fluid col-lg-4'>
                            <p>{props.text}</p>
                        </div>
                        <div className='container-fluid col-lg-2 btn-group'>
                            <button type='button' className='btn btn-default btn-sm'>
                            <a className='glyphicon glyphicon-trash delete-todo'></a> 
                            </button>
                            <button type='button' className='btn btn-default btn-sm'>
                            <a className='glyphicon glyphicon-edit edit-todo'></a>
                            </button>
                        </div>
                    {/* </div> */}
                </div>
            </li>
        </div>
    
    	);
    }

export default IndividualTask