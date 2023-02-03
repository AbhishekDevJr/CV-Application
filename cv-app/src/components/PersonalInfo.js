import React from 'react';
import {Component} from 'react';
import ExperienceComp from './ExperienceComp';

class PersonalInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            fname : '',
            lname : '',
            title : '',
            address : '',
            number : '',
            email : '',
            description : '',
            disableInput : false
        };

    }
    //Function to receive data from DisplayComp child component to disable input fields upon successful Resume Form Validation
    handleDisableInput = (valueDisable) =>{
        this.setState({
            disableInput : valueDisable
        });
    }

    //Functions to handle OnChange events on input fields
    handleFirstName = (e) => {

        this.setState({
            fname : e.target.value
        });
    }

    handleLastName = (e) => {
        this.setState({
            lname : e.target.value
        });
    }

    handleTitle = (e) => {
        this.setState({
            title : e.target.value
        });
    }

    // handlePhoto = (e) => {
    //     // console.log('Photo-->', e, ' Will implement handling pictures feature later');
    // }

    handleAddress = (e) => {
        this.setState({
            address : e.target.value
        });
    }

    handleNumber = (e) => {
        this.setState({
            number : e.target.value
        });
    }

    handleEmail = (e) => {
        this.setState({
            email : e.target.value
        });
    }

    handleDescription = (e) => {
        this.setState({
            description : e.target.value
        });
    }

    render(){
        return(
            <div className = "personal-info">
                <header>
                    <h1>CV Generator</h1>
                    <p>Personal Information</p>
                </header>
                <div className = "section-personalInfo">
                    <form action = "" method = "">
                        <div className = "row">
                        <label htmlFor = "name">First Name</label>
                        <input type = "text" id = "name" name = "name" value={this.state.fname} disabled = {this.state.disableInput} onChange={this.handleFirstName}/>
                        </div>

                        <div className = "row">
                        <label htmlFor = "lName">Last Name</label>
                        <input type = "text" id = "lName" name = "lName" value = {this.state.lname} disabled = {this.state.disableInput} onChange = {this.handleLastName} />
                        </div>

                        <div className = "row">
                        <label htmlFor = "title">Title</label>
                        <input type = "text" id = "title" name = "title" value = {this.state.title} disabled = {this.state.disableInput} onChange = {this.handleTitle} />
                        </div>

                        <div className = "row">
                        <label htmlFor = "photo">Photo</label>
                        <input type = "file" id = "photo" name = "photo" disabled = {this.state.disableInput} />
                        </div>

                        <div className = "row">
                        <label htmlFor = "address">Address</label>
                        <input type = "text" id = "address" name = "Address" value = {this.state.address}  disabled = {this.state.disableInput} onChange = {this.handleAddress}/>
                        </div>

                        <div className = "row">
                        <label htmlFor = "number">Phone Number</label>
                        <input type = "text" id = "number" name = "Number" value = {this.state.number} disabled = {this.state.disableInput} onChange = {this.handleNumber} />
                        </div>

                        <div className = "row">
                        <label htmlFor = "email">Email</label>
                        <input type = "email" id = "email" name = "Email" value = {this.state.email} disabled = {this.state.disableInput} onChange = {this.handleEmail} />
                        </div>

                        <div className = "row">
                        <label htmlFor = "description">Description</label>
                        <textarea id = "description" name = "Description" rows = "5" value = {this.state.description} disabled = {this.state.disableInput} onChange = {this.handleDescription} ></textarea>
                        </div>

                    </form>

                </div>

                <ExperienceComp propObj1 = {this.state} handleInputPersonal = {this.handleDisableInput} />
            </div>
        )
    }
}

export default PersonalInfo;