
import React, { Component } from 'react';
import './navbar.css';

export default class Navbar extends Component{

    render() {
        return (
            <div>
                <h1 class="display-1" id="title">
                    Todo List
                </h1>

            <nav id="navigationbar" class="navbar navbar-nav bg-dark nav-fill w-100" >
                <div id="navbarelements">
                    <div  >
                    {/* {this.props.arra.map((page) => <a href="#">  </a>)} */}
                     <button class="btn btn-dark" onClick={()=>{this.props.getTasks(true)}}> CompletedTasks </button>
                     <button class="btn btn-dark" onClick={()=>{this.props.getTasks(false)}}> Tasks </button>
                     <button class="btn btn-dark "  > </button>
                    </div>
                </div>
            </nav>
            </div>
        )
    }



}
