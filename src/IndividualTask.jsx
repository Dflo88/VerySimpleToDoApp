import React, { Component } from 'react';
import TaskExpandedView from './TaskExpandedView'
import TaskCompressedView from './TaskCompressedView'

class IndividualTask extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler(event){
        this.props.clickHandler(event);
    }
    
    render(){
        if (this.props.editWindow){
            return (
                <TaskExpandedView text={this.props.text} priority={this.props.priority}/>
            )
        } else {
            return (
                <TaskCompressedView text={this.props.text} priority={this.props.priority} clickHandler={this.clickHandler.bind(this)}/>
            );
        }
    };
}

export default IndividualTask