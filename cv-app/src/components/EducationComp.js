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
        // this.props.handleInputExperience(true);
        this.setState({
            UniName : e.target.value
        },() => {console.log("New state in ASYNC callback:", this.state);
            });
        // e.preventDefault();
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
        }, () => {console.log("New state in ASYNC callback:", this.state);
    });
    }

    render(){
        console.log('In Education Comp-->' , this.props.propObj1 , this.props.propObj2)
        return(
            <div className = "education-comp">
                <p className = "p-class">Education</p>

                <div className = "education-form">
                    <form action = "" method = "">

                    <div className = "row">
                        <label htmlFor = "uniName">University Name</label>
                        <input type = "text" id = "uniName" name = "uniName" disabled = {this.props.propObj1.disableInput} onChange = {this.handleUniName} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "eduCity">City</label>
                        <input type = "text" id = "eduCity" name = "eduCity" disabled = {this.props.propObj1.disableInput} onChange = {this.handleEduCity} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "degree">Degree</label>
                        <input type = "text" id = "degree" name = "degree" disabled = {this.props.propObj1.disableInput} onChange = {this.handleDegree} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "subject">Subject</label>
                        <input type = "text" id = "subject" name = "subject" disabled = {this.props.propObj1.disableInput} onChange = {this.handleSubject} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "eduStartDate">Start Date</label>
                        <input type = "date" id = "eduStartDate" name = "eduStartDate" disabled = {this.props.propObj1.disableInput} onChange = {this.handleEduStartDate} />
                    </div>

                    <div className = "row">
                        <label htmlFor = "eduEndDate">End Date</label>
                        <input type = "date" id = "eduEndDate" name = "eduEndDate" disabled = {this.props.propObj1.disableInput} onChange = {this.handleEduEndDate} />
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