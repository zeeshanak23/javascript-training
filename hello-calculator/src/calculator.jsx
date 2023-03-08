import React from "react";
import index from './index.css'
import Button from "./components/button/button";

const Calculator = ({ num1, num2, num3, num4, num5 }) => {
    const [state, modiifyState] = React.useState({ outputValue: "" })
    const buttonClickHander = (numbtn) => {
        modiifyState({
            outputValue: state.outputValue + numbtn
        });
    }




    return (
        <div className="calculator">
            <textarea className="text-box" rows={3} value={state.outputValue} />
            <hr></hr>

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