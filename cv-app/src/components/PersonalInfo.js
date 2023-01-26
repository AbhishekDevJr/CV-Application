import React from 'react';
import {Component} from 'react';

class PersonalInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "personal-info">
                <header>CV Generator</header>
                <div className = "section-personalInfo">
                    <form action = "" method = "">
                        <label htmlFor = "name">First Name</label>
                        <input type = "text" id = "name" name = "name" placeholder = "First Name" />

                        <label htmlFor = "lName">Last Name</label>
                        <input type = "text" id = "lName" name = "lName" />

                        <label htmlFor = "title">Title</label>
                        <input type = "text" id = "title" name = "title" />

                        <label htmlFor = "photo">Photo</label>
                        <input type = "file" id = "photo" name = "photo" />

                        <label htmlFor = "address">Address</label>
                        <input type = "text" id = "address" name = "Address" />

                        <label htmlFor = "number">Phone Number</label>
                        <input type = "text" id = "number" name = "Number" />

                        <label htmlFor = "email">Email</label>
                        <input type = "email" id = "email" name = "Email" />

                        <label htmlFor = "description">Description</label>
                        <textarea id = "description" name = "Description"></textarea>
                    </form>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;