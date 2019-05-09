import React, { Component } from 'react';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:"",
        password:""
    }
}

    getUsers = (username,password) => {
        let URL = "http://localhost:8085/api/v1/users///"+this.state.username;
        let request = new XMLHttpRequest();
        request.open("GET", URL);
        request.responseType = "json";
        request.onload = () => {
          console.log(request.response);
          if (request.response===1){
            console.log("hello");
            this.loginAttempt(username,password);
          }
        }
        request.send();
      }
      loginAttempt = () => {
        let URL = "http://localhost:8085/api/v1/users///"+this.state.username+"/"+this.state.password;
        let request = new XMLHttpRequest();
        request.open("GET", URL);
        request.responseType = "json";
        request.onload = () => {
          console.log(request.response);
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
