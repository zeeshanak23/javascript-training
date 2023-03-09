import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import photo from './dot.png';
import NavBar from './components/navigation/navigation';
import Header from './components/heading/heading';
import BasicPlan from './components/lists/list';
import logo from './tick.svg';
import Highlight from './components/highlight/highlight';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <NavBar image={photo} name="Unitiled" />
    <Header />
    <div className='lists'>
      <div><BasicPlan headline="Basic Plan" tick={logo} price="$10" /></div>
      <div> <Highlight headline="Bussiness Plan" tick={logo} price="$20" /></div>
      <div><BasicPlan headline="Enterprises Plan" tick={logo} price="$40" /></div>
    </div>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
