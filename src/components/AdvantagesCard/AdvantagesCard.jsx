import React from 'react';
import "./AdvantagesCard.css";

const AdvantagesCard = (props) => {
  return (
    <>
        <svg className="advantages-mask">
            <clipPath id="advantages-clip">
                <path d="M294.5 66C302.406 66 306.36 66 309.59 66.9225C317.566 69.2001 323.8 75.4343 326.077 83.4099C327 86.6404 327 90.5936 327 98.5V218.8C327 236.722 327 245.683 323.512 252.528C320.444 258.549 315.549 263.444 309.528 266.512C302.683 270 293.722 270 275.8 270H51.2C33.2783 270 24.3175 270 17.4723 266.512C11.4511 263.444 6.55573 258.549 3.48779 252.528C0 245.683 0 236.722 0 218.8V51.2C0 33.2783 0 24.3175 3.48779 17.4723C6.55573 11.4511 11.4511 6.55574 17.4723 3.48779C24.3175 0 33.2783 0 51.2 0H229C237.373 0 241.56 0 244.967 1.03343C252.637 3.36023 258.64 9.36273 260.967 17.0332C262 20.4399 262 24.7106 262 33.2519C262 41.3237 262 45.3596 262.923 48.5901C265.2 56.5657 271.434 62.7999 279.41 65.0775C282.64 66 286.594 66 294.5 66Z" fill="white"/>
            </clipPath>
        </svg>

        <article className="advantages__card">
            <div className="advantages__card-icon">
                <i className={props.icon}></i>
            </div>

            <div className="advantages__card-bg">
                <h3 className="advantages__card-title">
                    {props.title}
                </h3>

                <p className="advantages__card-text">
                    {props.text}
                </p>

                <button className="button advantages__button">
                  Learn More
                  <div className="button__icon">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </button>
            </div>
        </article>
    </>
  )
}

export default AdvantagesCard