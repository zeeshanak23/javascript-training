import React from "react";
import InputButton from "./components/input-Button/InputButton";
import './index.css'

const KeyBoardApp = ({ letters1, letters2, letters3, letters4 }) => {
    const [state, modiifyState] = React.useState({ outputValue: "" })
    const buttonClickHander = (letter) => {
        modiifyState({
            outputValue: state.outputValue + letter
        });
    }
    return (
        <div className="keyboard">
            <textarea rows={3} value={state.outputValue} />
            <div>
                {letters1.map((l, i) => <InputButton clickHandler={buttonClickHander} letter={l} key={i} />)}
            </div>
            <div>
                {letters2.map((l, i) => <InputButton clickHandler={buttonClickHander} letter={l} key={i} />)}
            </div>
            <div>
                {letters3.map((l, i) => <InputButton clickHandler={buttonClickHander} letter={l} key={i} />)}
            </div>
            <div className="spaceButton">
                {letters4.map((l, i) => <InputButton clickHandler={buttonClickHander} letter={l} key={i} />)}
            </div>
        </div>
    )
};

export default KeyBoardApp;
