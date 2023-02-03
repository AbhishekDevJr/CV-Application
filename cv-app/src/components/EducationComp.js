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

    //Functions to handle onChange events on input fields.

    handleUniName = (e) => {
        this.setState({
            UniName : e.target.value
        });
    }

    handleEduCity = (e) => {
        this.setState({
            EduCity : e.target.value
        });
    }

    handleDegree = (e) => {
        this.setState({
            Degree : e.target.value
        });
    }

    handleSubject = (e) => {
        this.setState({
            subject : e.target.value
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
        });
    }

    render(){
        return(
            <div className = "education-comp">
                <p className = "p-class">Education</p>

                <div className = "education-form">
                    <form action = "" method = "">

                    <div className = "row">
                        <label htmlFor = "uniName">University Name</label>
                        <input type = "text" id = "uniName" name = "uniName" value={this.state.UniName} disabled = {this.props.propObj1.disableInput} onChange = {this.handleUniName} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "eduCity">City</label>
                        <input type = "text" id = "eduCity" name = "eduCity" value={this.state.EduCity} disabled = {this.props.propObj1.disableInput} onChange = {this.handleEduCity} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "degree">Degree</label>
                        <input type = "text" id = "degree" name = "degree" value={this.state.Degree} disabled = {this.props.propObj1.disableInput} onChange = {this.handleDegree} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "subject">Subject</label>
                        <input type = "text" id = "subject" name = "subject" value={this.state.subject} disabled = {this.props.propObj1.disableInput} onChange = {this.handleSubject} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "eduStartDate">Start Date</label>
                        <input type = "date" id = "eduStartDate" name = "eduStartDate" value={this.state.EduStartDate} disabled = {this.props.propObj1.disableInput} onChange = {this.handleEduStartDate} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "eduEndDate">End Date</label>
                        <input type = "date" id = "eduEndDate" name = "eduEndDate" value={this.state.EduEndDate} disabled = {this.props.propObj1.disableInput} onChange = {this.handleEduEndDate} />
                    </div>

                    </form>
                </div>
                <div className = "container-display">
                    <DisplayComp propObj1 = {this.props.propObj1} propObj2 = {this.props.propObj2} propObj3 = {this.state} handleInputEducation = {this.props.handleInputExperience} />
                </div>
            </div>
        );
    }
}

export default ExperienceComp;