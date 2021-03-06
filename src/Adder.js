import React, { Component } from 'react';
import Task from "./Task.js"
import "./Adder.css"
export default class Adder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            arr:[]
        }
    }
    render() {
        return (
            
            <div class="d-flex justify-content-center">
                
                <input type="text" class="col-sm-6"id="inputField" onChange={this.taskchange} value={this.state.task}/>
                <input type="button" value="Submit Task" class="adder"onClick={()=>this.props.addTask(this.state.task)}></input>
                {this.state.arr.map((arr,i)=><p key={"task"+ i}> {arr}</p>)}
            </div>

        );
    }
//function below creates a new array then changes the state array to itself after pushing the data in the name into itself
    // addTask = () => {
    //     let arra = this.state.arr;
    //     arra.push(this.state.task);
    //     this.setState({
    //         arr: arra,
    //         task:""
    //     })
    // }
    
//using a function without binding will result in errors
// arrow functions impicitly bind them 
    taskchange=(text)=>{
        //improtant imbuilt function to change the data on the page
         this.setState ({
            task:text.target.value


        //DONT DO THE FOLLOWING
        //this.state.name=text.target.value;

         });
    }
    // addTask=()=>{
    // URL = "http://localhost:8080/api/v1/todos"
    // let request2 = new XMLHttpRequest();
    // request2.open('POST', URL);
    // request2.responseType = 'json';
    // request2.setRequestHeader("Content-Type", "application/json")
    // request2.setRequestHeader("Accept", "application/json")
    // // let bod = {todo: document.getElementById("text").value,userID: 13 }
    // // // request2.onload = function () {
    // // //     getTasks()
    // // // }
    // // console.log(bod)
    // request2.send(JSON.stringify(bod))
    // }





    //pass down addtask from parent then use pretty much the same code and syntax with an onload
}