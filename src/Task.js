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
                  <button type="button" onClick={()=>{this.updateTask(this.props.task,this.props.taskId)}}>
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
    updateTask=(todo,taskId)=>{
    let URL = "http://localhost:8080/api/v1/todos///"+ this.props.taskId
    let request = new XMLHttpRequest();
    request.open("PUT", URL);
    request.setRequestHeader("Content-Type","application/json")
    request.responseType = "json";
    let stringID= ''+taskId;

    let updateBody={
        idTodo:taskId,todo:todo, completed:true
    }
    request.onload=()=>{
        this.props.getTasks();
    }
    console.log(JSON.stringify(updateBody))
    request.send(JSON.stringify(updateBody));

    }


}