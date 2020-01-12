import React from 'react';

class navbar extends React.Component {
    state = {  }
    render() { 
        return ( 
        <nav>
            <a href="#">{this.props.name}</a>
            <a href="#">{this.props.name}</a>
            <a href="#">{this.props.name}</a>
        </nav> );
    }
}
export default navbar;