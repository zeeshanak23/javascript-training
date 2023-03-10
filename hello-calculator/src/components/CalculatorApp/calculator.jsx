import Button from "../Button/button";
import React from 'react';
import './calculator.css';

const Calculator = ({ num1, num2, num3, num4, num5 }) => {
    const [state, modiifyState] = React.useState({ outputValue: "", result: "" })
    const buttonClickHander = (numbtn) => {
        modiifyState({
            ...state,
            outputValue: state.outputValue + numbtn
        });
    }
    const clear = () => {
        modiifyState({
            result: 0,
            outputValue: ""
        });
    }
    const Equal = () => {
        let input = state.outputValue
        let output = 0;
        if (input.indexOf("+") >= 0) {
            let opds = input.split("+")
            output = Number(opds[0]) + Number(opds[1])
        }
        else if (input.indexOf("*") >= 0) {
            let opds = input.split("*")
            output = Number(opds[0]) * Number(opds[1])
        } else if (input.indexOf("-") >= 0) {
            let opds = input.split("-")
            output = Number(opds[0]) - Number(opds[1])
        } else if (input.indexOf("/") >= 0) {
            let opds = input.split("/")
            output = Number(opds[0]) / Number(opds[1])
        } else if (input.indexOf("%") >= 0) {
            let opds = input.split("%")
            output = (Number(opds[0]) / 100) * Number(opds[1])
        }

        modiifyState({
            ...state,
            result: state.result + output
        });
    }



    return (
        <div className="calculator">
            <textarea className="text-box" rows={3} value={state.outputValue} />
            <div className="result" type="text" >
                {state.result}
            </div>

            <hr className="hr"></hr>

            <div>
                <button className="clear-btn" onClick={(e) => clear()}  >C</button>

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
            <button className="Eql-btn" onClick={(e) => Equal()}>=</button>
            <hr className="h1"></hr>
        </div>
    )
};
export default Calculator;