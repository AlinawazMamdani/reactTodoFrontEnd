import React, { Component } from 'react';
import {CONNECTION} from './constants.js'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:"",
        password:"",
        userID:0
    }
}

    getUsers = (username,password,reg) => {
        let URL = `${CONNECTION}/v1/users///`+this.state.username;
        let request = new XMLHttpRequest();
        request.open("GET", URL);
        request.responseType = "json";
        request.onload = () => {
          console.log(request.response);
  
          if(reg=="reg" && request.response===1){
            window.alert("username taken")
          }else if(reg==="reg"){
            this.register()
          }
          else if (request.response===1){
            this.loginAttempt(username,password);
          }
        }
        request.send();
      }
      register=()=>{
        let URL=`${CONNECTION}/v1/users/`;
        let request2 = new XMLHttpRequest();
        request2.open('POST', URL);
        request2.responseType = 'json';
        request2.setRequestHeader("Content-Type", "application/json")
        request2.setRequestHeader("Accept", "application/json")
        request2.onload=()=>{
          this.loginAttempt(this.state.username,this.state.password);
        }
        let bod = {username: this.state.username,password: this.state.password }
        request2.send(JSON.stringify(bod))
        }
      
      loginAttempt = (username,password) => {
        let URL = `${CONNECTION}/v1/users///`+username+"/"+password ;
        let request = new XMLHttpRequest();
        request.open("GET", URL);
        request.responseType = "json";
        request.onload = () => {
          console.log(request.response)
          this.props.updateUserID(request.response);
          this.setState({
            tasks: request.response
          });
        }
        request.send();
      }
    render() {
        return (
            <div>
                <h1 class="display-1" id="title">
                    Todo List
                </h1>
                <input type="text" placeholder="username"onChange={this.userchange}></input>
                <input type="password" placeholder="password"onChange={this.passchange}></input>
                <button onClick={()=>this.getUsers(this.state.username,this.state.password)}>Login</button>
                <button onClick={()=>this.getUsers(this.state.username,this.state.password,"reg")}>Register</button>
            </div>

        );
    }

    userchange=(text)=>{
      //improtant imbuilt function to change the data on the page
       this.setState ({
          username:text.target.value
      //DONT DO THE FOLLOWING
      //this.state.name=text.target.value;
       });
  }
  passchange=(text)=>{
    //improtant imbuilt function to change the data on the page
     this.setState ({
        password:text.target.value
    //DONT DO THE FOLLOWING
    //this.state.name=text.target.value;
     });
}



}
