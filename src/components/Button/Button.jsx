import React from 'react';
import "./Button.css";

const Button = (props) => {
  return (
    <button className="button">
        {props.text}
        <div className="button__icon">
           <i className="ri-arrow-right-up-line"></i>
        </div>
    </button>
  )
}

export default Button;