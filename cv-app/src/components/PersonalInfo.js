import React from 'react';
import {Component} from 'react';

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
            description : ''
        };

    }

    handleFirstName = (e) => {

        this.setState({
            fname : e.target.value
        },() => {
            console.log("New state in ASYNC callback:", this.state.fname + ' ' + this.state.lname );
          });
        console.log('State Object--> ' , this.state);
    }

    handleLastName = (e) => {
        this.setState({
            lname : e.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.fname + ' ' + this.state.lname );
          });
    }

    handleTitle = (e) => {
        this.setState({
            title : e.target.value
        });
    }

    handlePhoto = (e) => {
        console.log('Photo-->', e, ' Will implement handling pictures feature later');
    }

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
            email : e.target.valule
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
                        <input type = "text" id = "name" name = "name" value={this.state.fname} placeholder = "First Name" onChange={this.handleFirstName}/>
                        </div>

                        <div className = "row">
                        <label htmlFor = "lName">Last Name</label>
                        <input type = "text" id = "lName" name = "lName" onChange = {this.handleLastName} />
                        </div>

                        <div className = "row">
                        <label htmlFor = "title">Title</label>
                        <input type = "text" id = "title" name = "title" onChange = {this.handleTitle} />
                        </div>

                        <div className = "row">
                        <label htmlFor = "photo">Photo</label>
                        <input type = "file" id = "photo" name = "photo" onChange = {this.handlePhoto} />
                        </div>

                        <div className = "row">
                        <label htmlFor = "address">Address</label>
                        <input type = "text" id = "address" name = "Address" onChange = {this.handleAddress}/>
                        </div>

                        <div className = "row">
                        <label htmlFor = "number">Phone Number</label>
                        <input type = "text" id = "number" name = "Number" onChange = {this.handleNumber} />
                        </div>

                        <div className = "row">
                        <label htmlFor = "email">Email</label>
                        <input type = "email" id = "email" name = "Email" onChange = {this.handleEmail} />
                        </div>

                        <div className = "row">
                        <label htmlFor = "description">Description</label>
                        <textarea id = "description" name = "Description" onChange = {this.handleDescription} ></textarea>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;