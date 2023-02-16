import React from 'react';
import {Component} from 'react';
import PersonalInfo from './components/PersonalInfo';
import './App.css';
import Socials from './components/Socials';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "app">
        <PersonalInfo />
        <Socials />
      </div>
    )
  }
}

export default App;
