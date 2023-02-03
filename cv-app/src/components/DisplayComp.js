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
            <div className = "conditional-render" id = "resume-section">
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
                        <p className = "margin-remove p-dark">Address:</p>
                        <p className = "margin-remove">{this.props.propObj1.address}</p>
                        <p className = "margin-remove p-dark">Phone Number:</p>
                        <p className = "margin-remove">{this.props.propObj1.number}</p>
                        <p className = "margin-remove p-dark">Email:</p>
                        <p className = "margin-remove">{this.props.propObj1.email}</p>
                    </div>
                </div>
                <div className = "experience-section-resume">
                    <p className = "margin-remove heading-blue">Experience</p>
                    <div className = "experience-contents">
                        <p className = "margin-remove date-item p-dark">{this.props.propObj2.EndDate} - {this.props.propObj2.StartDate}</p>
                        <div className = "flex-item-2">
                            <p className = "margin-remove p-dark">{this.props.propObj2.position}</p>
                            <p className = "margin-remove">{this.props.propObj2.company}, {this.props.propObj2.city}</p>
                        </div>
                    </div>
                </div>
                <div className = "education-section-resume">
                    <p className = "margin-remove heading-blue">Education</p>
                    <div className = "education-contents">
                        <p className = "date-item p-dark">{this.props.propObj3.EduStartDate} - {this.props.propObj3.EduEndDate}</p>
                        <div className = "flex-item-2">
                            <p className = "p-dark">{this.props.propObj3.UniName}, {this.props.propObj3.EduCity}</p>
                            <p><span className = "p-dark">Degree:</span> {this.props.propObj3.Degree}</p>
                            <p><span className = "p-dark">Subject:</span> {this.props.propObj3.subject}</p>
                        </div>
                    </div>
                </div>
            </div>);
        }
        // e.preventDefault();
    }

    handleBtnClick = (e) => {

        //Resume Form Validations
        console.log('checking First character-----------------------> ', this.props.propObj1.fname[0]);
        //First Name Validation
        let validFormFlag = false;
        if(this.props.propObj1.fname === '' || typeof(this.props.propObj1.fname === Number) || typeof(this.props.propObj1.fname[0] === Number) || this.props.propObj1.fname[0] === ' '){
            const firstNameInput = document.getElementById('name');
            firstNameInput.classList.add('errorClass');
            validFormFlag = false;
        }

        else if(this.props.propObj1.lname === '' || typeof(this.props.propObj1.lname === Number) || typeof(this.props.propObj1.lname[0] === Number) || this.props.propObj1.lname[0] === ' '){
            //Last Name Validation
            const lastNameInput = document.getElementById('lName');
            lastNameInput.classList.add('errorClass');
            validFormFlag = false;
        }

        else if(isNaN(this.props.propObj1.number)){
            console.log('-------------------->', parseInt(this.props.propObj1.number));
            const numberInput = document.getElementById('number');
            numberInput.classList.add('errorClass');
            validFormFlag = false;
        }

        else if(!this.props.propObj1.email.includes('@')){
            //Email Validation
            const emailInput = document.getElementById('email');
            emailInput.classList.add('errorClass');
            validFormFlag = false;
        }

        else if(this.props.propObj2.StartDate > this.props.propObj2.EndDate){
            //Date Validation Experience
            const expStartDateInput = document.getElementById('sDate');
            const expEndDateInput = document.getElementById('eDate');
            expEndDateInput.classList.add('errorClass');
            expStartDateInput.classList.add('errorClass');
            validFormFlag = false;
        }

        else if(this.props.propObj3.EduStartDate > this.props.propObj3.EduEndDate){
            //Date Validation Education
            const eduStartDateInput = document.getElementById('eduStartDate');
            const eduEndDateInput = document.getElementById('eduEndDate');
            eduStartDateInput.classList.add('errorClass');
            eduEndDateInput.classList.add('errorClass');
            validFormFlag = false;
        }

        else{
            validFormFlag = true;
        }

        if(validFormFlag){
            //Removing Error Class so that red error border is removed upon Valid Resume Form
            const allInputFields = document.querySelectorAll('input');
            allInputFields.forEach((inputField) => {
                inputField.classList.remove('errorClass');
            });

            this.props.handleInputEducation(validFormFlag);
            this.setState({
                isClicked : validFormFlag
            });
            e.preventDefault();
            const resumeSection = document.getElementById('display-handler');
            if (resumeSection) {
                setTimeout(() => {resumeSection.scrollIntoView({ behavior: 'smooth' });}, 100);
            }
        }

        
    }

    handleBtnEditClick = (e) => {
        this.props.handleInputEducation(false);
        this.setState({
            isClicked : false
        });
        e.preventDefault();
    }

    render(){
        console.log('display Component--> ' , this.props.propObj1, 'propObj2--> ', this.props.propObj2, this.props.propObj3);
        return(
            <div className = "display-comp">
                <div className = "button-container">
                    <button className = "display-handler" id = "display-handler" onClick = {this.handleBtnClick}>Create CV</button>
                    <button className = "display-handler" onClick = {this.handleBtnEditClick}>Edit CV</button>
                </div>
                {this.conditionalRender()}
            </div>
        );
    }
}

export default DisplayComp;