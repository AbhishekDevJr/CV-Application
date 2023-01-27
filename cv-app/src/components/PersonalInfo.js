import React from 'react';
import {Component} from 'react';

class PersonalInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            fname : ''
        };
    }

    handleFirstName = (e) => {
        console.log(e.target.value);
        this.setState({
            fname : e.target.value,
        });
        console.log(this.state.fname);
    }

    render(){
        return(
            <div className = "personal-info">
                <header><h1>CV Generator</h1></header>
                <div className = "section-personalInfo">
                    <form action = "" method = "">
                        <div className = "row">
                        <label htmlFor = "name">First Name</label>
                        <input type = "text" id = "name" name = "name" placeholder = "First Name" onChange={this.handleFirstName}/>
                        </div>

                        <div className = "row">
                        <label htmlFor = "lName">Last Name</label>
                        <input type = "text" id = "lName" name = "lName" />
                        </div>

                        <div className = "row">
                        <label htmlFor = "title">Title</label>
                        <input type = "text" id = "title" name = "title" />
                        </div>

                        <div className = "row">
                        <label htmlFor = "photo">Photo</label>
                        <input type = "file" id = "photo" name = "photo" />
                        </div>

                        <div className = "row">
                        <label htmlFor = "address">Address</label>
                        <input type = "text" id = "address" name = "Address" />
                        </div>

                        <div className = "row">
                        <label htmlFor = "number">Phone Number</label>
                        <input type = "text" id = "number" name = "Number" />
                        </div>

                        <div className = "row">
                        <label htmlFor = "email">Email</label>
                        <input type = "email" id = "email" name = "Email" />
                        </div>

                        <div className = "row">
                        <label htmlFor = "description">Description</label>
                        <textarea id = "description" name = "Description"></textarea>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;