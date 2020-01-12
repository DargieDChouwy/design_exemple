import React from 'react';

class navbar extends React.Component {
    state = {  }
    render() { 
        return ( 
        <nav id="mainNav">
            <ul>
            <div id="navImg"></div>
            <li><a href="#">{this.props.textOne}</a></li>
            <li><a href="#">{this.props.textSecond}</a></li>
            <div id="dropdown">
                    <li>About the firm 
                        <i id="fa fa-caret-down"></i>
                    </li>
                    <div id="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            <li><a href="#">{this.props.textFour}</a></li>
            </ul>
            <div id="navRight">
                <div id="dropdown">
                    <span>English 
                        <i id="fa fa-caret-down"></i>
                    </span>
                    <div id="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div> 
                <span>Login</span>
                <button id="newButton">Register</button>
            </div>
        </nav> );
    }
}
export default navbar;