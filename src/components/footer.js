import React from 'react';
import Phone from '../images/phone.png'
import Email from '../images/email.png'

class footer extends React.Component {
    state = {  }
    render() { 
        return ( 
        <footer id="footer">
            
            <div id="Contact">
                <div className="bar">
                    <ul className="ulfooter">
                        <h4>{this.props.titleOne}</h4>
                        <div className="imgNext">
                            <img className="imgFooter" src={Phone} alt=""></img>
                            <div className="textNext phone">{this.props.numberphone}</div>
                        </div>
                        <div className="imgNext">
                            <img className="imgFooter" src={Email} alt=""></img>
                            <div className="textNext email">{this.props.email}</div>
                        </div>
                        <li>{this.props.textContact}</li>  
                    </ul>
                </div>
            </div>

            <div id="Forinvestor">
                <div className="bar">
                    <ul className="ulfooter">
                        <h4>{this.props.titleSecond}</h4>
                        <li className="lifooter">{this.props.investortext}</li>
                        <li className="lifooter">{this.props.investortexttwo}</li>
                        <li className="lifooter">{this.props.investortextthird}</li> 
                    </ul>
                </div>
            </div>

            <div id="Aboutexemplar">
                <div className="bar">
                    <ul className="ulfooter">
                        <h4>{this.props.titleThird}</h4>
                        <li className="lifooter">{this.props.first}</li>
                        <li className="lifooter">{this.props.second}</li>
                        <li className="lifooter"><br/></li>
                    </ul>
                </div>
            </div>

            <div id="Resources">
                <div className="bar">
                    <ul className="ulfooter">
                        <h4>{this.props.titleFour}</h4>
                        <li className="lifooter">{this.props.firsttext}</li>
                        <li className="lifooter">{this.props.secondtext}</li>
                        <li className="lifooter"><br/></li>
                    </ul>
                </div>
            </div>
        </footer> );
    }
}
 
export default footer;