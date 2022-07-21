import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.scss';
import Greeting from './Greeting.jsx';

const formatDate = date => moment(date).format("DD MMM YYYY");

const rootElement = document.querySelector('#root');
ReactDOM.render(<Greeting 
  firstName="John" 
  lastName ="Doe" 
  // birthDate={Math.floor((new Date('2019-01-01T11:11:11.819Z') - new Date('2001-01-01T11:11:11.819Z')) / 1000 / 60 / 60 / 24 / 365.25)}/>,  
  birthDate = {Math.floor(moment(new Date()).diff(moment("02/26/2005","MM/DD/YYYY"),'years',true))}/>,
  rootElement);