import React from 'react';

class about extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div id="center">
            <div id="containerImg">
                <p id="titleText">{this.props.title}</p>
            </div>
                <div id="container">
                    <p id="mainText">{this.props.text}</p>
                    <div id="twoColumns">
                        <p id="leftText">{this.props.textLeft}</p>
                        <p id="rightText">{this.props.textRight}</p>
                    </div>    
                </div>    
        </div> 
        );
    }
}
 
export default about;