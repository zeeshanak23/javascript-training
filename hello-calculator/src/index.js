import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculator from './components/CalculatorApp/calculator';


const n1 = ["()", "%", "/"]
const n2 = ["7", "8", "9", "*"]
const n3 = ["4", "5", "6", "-"]
const n4 = ["1", "2", "3", "+"]
const n5 = ["+/-", "0", "."]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator num1={n1} num2={n2} num3={n3} num4={n4} num5={n5} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
