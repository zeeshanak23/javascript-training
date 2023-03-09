import index from './index.css'
import Button from "./components/button/button";
// import React, { useState, useEffect } from 'react';
import React from 'react';

const Calculator = ({ num1, num2, num3, num4, num5 }) => {
    const [state, modiifyState] = React.useState({ outputValue: "" })
    const buttonClickHander = (numbtn) => {
        modiifyState({
            outputValue: state.outputValue + numbtn
        });
    }
    // const [currentSum, setCurrentSum] = useState(0);
    // const [clear, setClear] = useState(false);
    // const Add = (e) => {
    //     e.preventDefault();
    //     if (clear) setClear(false);
    //     let currentNum = document.querySelector('#num').value
    //     if (currentNum == '')
    //         return;
    //     let sum = currentSum + parseInt(currentNum);
    //     setCurrentSum(sum);
    //     document.querySelector('#num').value = "";

    // }
    // const Clear = (e) => {
    //     e.preventDefault();
    //     console.log('sum:', currentSum);
    //     document.querySelector('form').reset();
    //     setClear(true);
    //     setCurrentSum(0);
    // }
    // useEffect(() => {
    //     document.querySelector('#result').value = "";
    // }, [])

    // useEffect(() => {
    //     if (clear)
    //         document.querySelector('#result').value = "";
    // })

    return (
        <div className="calculator">
            <textarea className="text-box" rows={3} value={state.outputValue} />
            <hr className="hr"></hr>

            <div>

                {num1.map((l, i) => <Button clickHandler={buttonClickHander} numbtn={l} key={i} />)}
            </div>
            <div>
                {num2.map((l, i) => <Button clickHandler={buttonClickHander} numbtn={l} key={i} />)}
            </div>
            <div>
                {num3.map((l, i) => <Button clickHandler={buttonClickHander} numbtn={l} key={i} />)}
            </div>
            <div>
                {num4.map((l, i) => <Button clickHandler={buttonClickHander} numbtn={l} key={i} />)}
            </div>
            <div>
                {num5.map((l, i) => <Button clickHandler={buttonClickHander} numbtn={l} key={i} />)}
            </div>
            <hr className="h1"></hr>
        </div>
    )
};
export default Calculator;