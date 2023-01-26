import React from 'react';
import {Component} from 'react';
import PersonalInfo from './components/PersonalInfo';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "app">
        <PersonalInfo />
      </div>
    )
  }
}

export default App;
