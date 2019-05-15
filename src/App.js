import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';
import Adder from './Adder.js'
import Navbar from './Navbar.js'
import TaskList from './TaskList';
import Login from './Login.js';
import {CONNECTION} from "./constants.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      userId:0,
      completed:false

    }
    
  }
  updateUserID=(passedUserID)=>{
    this.setState({
      userId:passedUserID
    });


  }
  addTask=(taskToAdd)=>{
    URL = `${CONNECTION}/api/v1/todos`
    let request2 = new XMLHttpRequest();
    request2.open('POST', URL);
    request2.responseType = 'json';
    request2.setRequestHeader("Content-Type", "application/json")
    request2.setRequestHeader("Accept", "application/json")
    request2.onload=()=>{
        this.getTasks()
    }
    
    let bod = {todo: taskToAdd,userID: this.state.userId }
    request2.send(JSON.stringify(bod))
    }

  getTasks = (completed) => {
    if (completed!=null){
      this.state.completed=completed;
    }
    let URL = `${CONNECTION}/api/v1/todos/`+this.state.userId +'/'+this.state.completed;
    let request = new XMLHttpRequest();
    request.open("GET", URL);
    request.responseType = "json";
    request.onload = () => {
      
      this.setState({
        tasks: request.response
      });
    }
    request.send();
  }
  deleteTasks=(id)=> {
    let requestURL =(`${CONNECTION}/api/v1/todos/`+ id);
    let request = new XMLHttpRequest();
    request.open('DELETE', requestURL);
    request.responseType = 'json'
    request.setRequestHeader("Content-Type", "application/json")
    request.setRequestHeader("Accept", "application/json")

    request.onload = ()=> {
      this.getTasks()
      }
      request.send();
}
updateTask=(todo,taskId,iscompleted)=>{
  let URL = `${CONNECTION}/api/v1/todos///`+ taskId
  let request = new XMLHttpRequest();
  request.open("PUT", URL);
  request.setRequestHeader("Content-Type","application/json")
  request.responseType = "json";
  if(iscompleted==true){
    iscompleted=false;
  }else{
    iscompleted=true;
  };
  let updateBody={
      idTodo:taskId,todo:todo, completed:iscompleted,userID:this.state.userId
  }
  request.onload=()=>{
      this.getTasks();
  }
  request.send(JSON.stringify(updateBody));

  }

  componentDidMount() {
    this.getTasks()
  }

  render() {
    //{let todo = this.state.tasks.map((d,i)=>)}
    if (this.state.userId!=0){
      return (
        <div>
          {/* <Navbar arra={["Completed Tasks", "Tasks"]} getTasks={this.getTasks}/> */}
          <Navbar getTasks={this.getTasks}/>
          <Adder getTasks={this.getTasks} addTask={this.addTask}/>
          <TaskList tasks={this.state.tasks} deleteTasks={this.deleteTasks} getTasks={this.getTasks} updateTask={this.updateTask} />
        </div>
  // {this.state.tasks.map((tasks,i) => <p key ={"task" + i}> {tasks.todo} </p>)}
      );

    }else{
      return(
        <div>
          <Login updateUserID={this.updateUserID}/>
        </div>

      )
     
    }
    

    }
    
  }

export default App;
