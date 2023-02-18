import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Socials from './components/Socials';

function App(props){
  return(
    <div className = "app">
      <PersonalInfo />
      <Socials />
    </div>
  );
}

export default App;