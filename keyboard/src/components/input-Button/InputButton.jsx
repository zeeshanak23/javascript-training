import './InputButton.css';

const InputButton = ({ letter, clickHandler }) => (
    <button onClick={(e) => clickHandler(letter)} className='letter'>{letter}</button>
)

export default InputButton;