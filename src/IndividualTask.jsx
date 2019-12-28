import React from 'react';

function IndividualTask(props) {
    var priority ;
    switch (Number(props.priority)) {
        case 1:
            priority = "list-group-item list-group-item-danger";
            break;
        case 2:
            priority = "list-group-item list-group-item-warning";
            break;
        case 3:
            priority = "list-group-item list-group-item-success";
            break;
    }
      
      return(
        <div>
            <li className={priority}>
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