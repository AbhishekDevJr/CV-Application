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
                    <h1 className = "resume-header-h1-inline">{this.props.propObj1.fname} </h1>
                    <h1 className = "resume-header-h1-inline">{this.props.propObj1.lname}</h1>
                    <p className = "title-p">{this.props.propObj1.title}</p>
                </div>
                <div className = "description-personalDetails">
                    <div className = "description">
                        <p className = "description-2nd heading-blue margin-top-push">Description</p>
                        <p className = "description-2nd margin-remove">{this.props.propObj1.description}</p>
                    </div>
                    <div className = "personal-details">
                        <p className = "heading-blue margin-top-push">Personal Details</p>
                        <p className = "margin-remove">Address</p>
                        <p className = "margin-remove">{this.props.propObj1.address}</p>
                        <p className = "margin-remove">Phone Number</p>
                        <p className = "margin-remove">{this.props.propObj1.number}</p>
                        <p className = "margin-remove">Email</p>
                        <p className = "margin-remove">{this.props.propObj1.email}</p>
                    </div>
                </div>
            </div>);
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