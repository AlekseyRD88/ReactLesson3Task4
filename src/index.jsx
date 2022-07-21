import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';



const rootElement = document.querySelector('#root');
ReactDOM.render(<Greeting 
  firstName="John" 
  lastName ="Doe"  
  birthDate = {new Date('2018-01-01T11:32:19.566Z') - new Date('2001-01-01T11:32:19.566Z')}/>,
  rootElement);