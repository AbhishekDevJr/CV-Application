import React from 'react';
import {Component} from 'react';

class DisplayComp extends Component {
    constructor(props){
        super(props);

        this.state = {
            isClicked : false
        }
    }

    conditionalRender = () => {
        if(this.state.isClicked){
            console.log(this.props);
            return(
            <div className = "conditional-render">
                <div className = "resume-header">
                    <p>{this.props.propObj1.fname}</p>
                    <p>{this.props.propObj1.title}</p>
                </div>
            </div>)
        }
    }

    handleBtnClick = (e) => {
        this.setState({
            isClicked : true
        });
    }

    render(){
        console.log('display Component--> ' , this.props.propObj1, this.props.propObj2, this.props.propObj3);
        return(
            <div className = "display-comp">
                <button className = "display-handler" onClick = {this.handleBtnClick}>Create CV</button>
                {this.conditionalRender()}
            </div>
        );
    }
}

export default DisplayComp;