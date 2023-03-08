import './button.css';

const Button = ({ numbtn, clickHandler }) => (
    <button onClick={(e) => clickHandler(numbtn)} className='numbtn'>{numbtn}</button>
);

export default Button;