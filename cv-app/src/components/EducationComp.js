import React from 'react';
import {Component} from 'react';
import DisplayComp from './DisplayComp';

class ExperienceComp extends Component {
    constructor(props){
        super(props);

        this.state = {
            UniName : '',
            EduCity : '',
            Degree : '',
            subject : '',
            EduStartDate : '',
            EduEndDate : ''
        }
    }

    handleUniName = (e) => {
        this.setState({
            UniName : e.target.value
        },() => {console.log("New state in ASYNC callback:", this.state);
            });
    }

    handleEduCity = (e) => {
        this.state({
            EduCity : e.target.value
        });
    }

    handleDegree = (e) => {
        this.state({
            Degree : e.target.value
        });
    }

    handleSubject = (e) => {
        this.setState({
            Subject : e.target.value
        });
    }

    handleEduStartDate = (e) => {
        this.setState({
            EduStartDate : e.target.value
        });
    }

    handleEduEndDate = (e) => {
        this.setState({
            EduEndDate : e.target.value
        }, () => {console.log("New state in ASYNC callback:", this.state);
    });
    }

    render(){
        return(
            <div className = "education-comp">
                <p>Education</p>

                <div className = "education-form">
                    <form action = "" method = "">

                    <div className = "row">
                        <label htmlFor = "uniName">University Name</label>
                        <input type = "text" id = "uniName" name = "uniName" onChange = {this.handleUniName} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "eduCity">City</label>
                        <input type = "text" id = "eduCity" name = "eduCity" onChange = {this.handleEduCity} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "degree">Degree</label>
                        <input type = "text" id = "degree" name = "degree" onChange = {this.handleDegree} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "subject">Subject</label>
                        <input type = "text" id = "subject" name = "subject" onChange = {this.handleSubject} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "eduStartDate">Start Date</label>
                        <input type = "date" id = "eduStartDate" name = "eduStartDate" onChange = {this.handleEduStartDate} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "eduEndDate">End Date</label>
                        <input type = "date" id = "eduEndDate" name = "eduEndDate" onChange = {this.handleEduEndDate} />
                    </div>

                    </form>
                </div>
                <div className = "container-display">
                    <DisplayComp />
                </div>
            </div>
        );
    }
}

export default ExperienceComp;