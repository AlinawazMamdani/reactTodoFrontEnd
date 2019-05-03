import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';
import Adder from './Adder.js'
import Navbar from './Navbar.js'
import TaskList from './TaskList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }


  getTasks = () => {
    let URL = "http://localhost:8080/api/v1/todos/"
    let request = new XMLHttpRequest();
    request.open("GET", URL);
    request.responseType = "json";
    request.onload = () => {
      console.log(request.response)
      
      this.setState({
        tasks: request.response
      });
    }
    request.send();
  }
  deleteTasks=(id)=> {
    let requestURL =("http://localhost:8080/api/v1/todos/"+ id);
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

  componentDidMount() {
    this.getTasks()
  }

  render() {
    //{let todo = this.state.tasks.map((d,i)=>)}
    console.log()
      return (
        <div>
          <Navbar arra={["cheese", "milk", "cow"]} />
          <Adder getTasks={this.getTasks}/>
          <TaskList tasks={this.state.tasks} deleteTasks={this.deleteTasks} getTasks={this.getTasks} />
        </div>
  // {this.state.tasks.map((tasks,i) => <p key ={"task" + i}> {tasks.todo} </p>)}
      );

    }
    
  }

export default App;
