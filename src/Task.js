import React, { Component } from 'react';

export default class Task extends Component {
    constructor(props,sentTasks) {
        super(props);

    }
    //tasks have been sent in work on the delete function and place it in here
    render(){
        return(
            <form>
                  <p key={"task"+ this.props.key} > {this.props.task} 
                </p>
                 <button type="button" onClick={()=>{this.deleteAndGetTasks(this.props.taskId)}}>
                      delete
                  </button>
                  <button type="button" onClick={()=>{this.props.updateTask(this.props.task,this.props.taskId,this.props.completed)}}>
                      update
                  </button>
                {/* <button type="button" onClick={()=> {this.props.deleteTasks(this.props.taskId) } }>
                      delete
                  </button> */}
            </form>
        );
    }
    deleteAndGetTasks=(tasId)=>{
        this.props.deleteTasks(this.props.taskId)
    }



}