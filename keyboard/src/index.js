import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import KeyBoardApp from './KeyBoard';

const l1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const l2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',]
const l3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M',]
const spacebar = [" "]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KeyBoardApp letters1={l1} letters2={l2} letters3={l3} letters4={spacebar} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
