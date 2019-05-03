
import React, { Component } from 'react';

export default class Navbar extends Component{

    render() {
        return (
            <nav>
                <a  href="#"></a>
                <button type="button">
                    <span ></span>
                </button>
                <div id="navbarNavAltMarkup">
                    <div >
                        {this.props.arra.map((page) => <a href="#"> {page} </a>)}
                    </div>
                </div>
            </nav>
        )
    }



}
