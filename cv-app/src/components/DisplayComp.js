import React from 'react';
import {Component} from 'react';

class DisplayComp extends Component {
    constructor(props){
        super(props);

        this.state = {
            isClicked : false
        }
    }

    handleBtnClick = (e) => {
        this.setState({
            isClicked : true
        });
    }

    render(){

        if(this.state.isClicked){
            let cvContent = <div className = "display-cv">Conditional Rendering Working</div>
        }else{
            let cvContent = <div className = ""></div>
        }

        return(
            <div className = "display-comp">
                {/*{this.state.isClicked ? (console.log('Yes Clicked') : (console.log('Not Clicked')))}*/}
                {this.cvContent}
                <button className = "display-handler" onClick = {this.handleBtnClick}>Create CV</button>
            </div>
        );
    }
}

export default DisplayComp;