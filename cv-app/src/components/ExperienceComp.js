import React from 'react';
import {Component} from 'react';
import EducationComp from './EducationComp';

class ExperienceComp extends Component {
    constructor(props){
        super(props);

        this.state = {
            position : '',
            company : '',
            city : '',
            StartDate : '',
            EndDate : ''
        }
    }

    //Functions to handle onChange events on input fields.

    handlePosition = (e) => {
        this.setState({
            position : e.target.value
        });
    }

    handleCompany = (e) => {
        this.setState({
            company : e.target.value
        });
    }

    handleCity = (e) => {
        this.setState({
            city : e.target.value
        });
    }

    handleStartDate = (e) => {
        this.setState({
            StartDate : e.target.value
        });
    }

    handleEndDate = (e) => {
        this.setState({
            EndDate : e.target.value
        });
    }

    render(){
        return(
            <div className = "experience-section">
                <p className = "p-class">Working Experience</p>

                <div className = "experience-form">
                <form action = "" method = "">
                    <div className = "row">
                        <label htmlFor = "position">Position</label>
                        <input type = "text" id = "position" name = "position" value={this.state.position} disabled = {this.props.propObj1.disableInput} onChange = {this.handlePosition} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "company">Company</label>
                        <input type = "text" id = "company" name = "company" value={this.state.company} disabled = {this.props.propObj1.disableInput} onChange = {this.handleCompany} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "city">City</label>
                        <input type = "text" id = "city" name = "city" value={this.state.city} disabled = {this.props.propObj1.disableInput} onChange = {this.handleCity} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "sDate">Start Date</label>
                        <input type = "date" id = "sDate" name = "sDate" value={this.state.StartDate} disabled = {this.props.propObj1.disableInput} onChange = {this.handleStartDate} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "eDate">End Date</label>
                        <input type = "date" id = "eDate" name = "eDate" value={this.state.EndDate} disabled = {this.props.propObj1.disableInput} onChange = {this.handleEndDate} />
                    </div>
                </form>
                </div>

                <EducationComp propObj1 = {this.props.propObj1} propObj2 = {this.state} handleInputExperience = {this.props.handleInputPersonal} />
            </div>
        );
    }
}

export default ExperienceComp;