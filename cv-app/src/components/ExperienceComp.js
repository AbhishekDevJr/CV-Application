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

    handlePosition = (e) => {
        this.setState({
            position : e.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state);
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
        }, () => {
            console.log("New state in ASYNC callback:", this.state);
          });
    }

    handleEndDate = (e) => {
        this.setState({
            EndDate : e.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state);
          });
    }

    render(){
        console.log('F Name -->' + this.props.propObj1);
        return(
            <div className = "experience-section">
                <p>Working Experience</p>

                <div className = "experience-form">
                <form action = "" method = "">
                    <div className = "row">
                        <label htmlFor = "position">Position</label>
                        <input type = "text" id = "position" name = "position" onChange = {this.handlePosition} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "company">Company</label>
                        <input type = "text" id = "company" name = "company" onChange = {this.handleCompany} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "city">City</label>
                        <input type = "text" id = "city" name = "city" onChange = {this.handleCity} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "sDate">Start Date</label>
                        <input type = "date" id = "sDate" name = "sDate" onChange = {this.handleStartDate} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "eDate">End Date</label>
                        <input type = "date" id = "eDate" name = "eDate" onChange = {this.handleEndDate} />
                    </div>
                </form>
                </div>

                <EducationComp />
            </div>
        );
    }
}

export default ExperienceComp;