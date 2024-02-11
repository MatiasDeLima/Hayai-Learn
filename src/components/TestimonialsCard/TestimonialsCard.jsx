import React from "react";
import "./TestimonialsCard.css";

const TestimonialsCard = (props) => {
  return (
    <>
      <svg className="testimonials__card-mask">
        <clipPath id="svg-path">
          <path
            d="M32.5 66C24.5936 66 20.6404 66 17.4099 66.9225C9.43431 69.2001 3.20006 75.4343 0.922517 83.4099C0 86.6404 0 90.5936 0 98.5V213.8C0 231.722 0 240.683 3.48779 247.528C6.55574 253.549 11.4511 258.444 17.4723 261.512C24.3175 265 33.2783 265 51.2 265H275.8C293.722 265 302.682 265 309.528 261.512C315.549 258.444 320.444 253.549 323.512 247.528C327 240.683 327 231.722 327 213.8V51.2C327 33.2783 327 24.3175 323.512 17.4723C320.444 11.4511 315.549 6.55574 309.528 3.48779C302.682 0 293.722 0 275.8 0H98C89.6266 0 85.4399 0 82.0332 1.03343C74.3627 3.36023 68.3602 9.36273 66.0334 17.0332C65 20.4399 65 24.7106 65 33.2519C65 41.3237 65 45.3596 64.0775 48.5901C61.7999 56.5657 55.5657 62.7999 47.5901 65.0775C44.3596 66 40.4064 66 32.5 66Z"
            fill="white"
          />
        </clipPath>
      </svg>

      <article className="testimonials__card">
        <div className="testimonials__card-quote">
          <i className="ri-double-quotes-r"></i>
        </div>

        <div className="card__bg">
          <div className="testemonials__card-profile">
            <img src={props.image} alt="" className="testimonalis__image" />

            <div className="testimonials__card-info">
              <h3 className="testimonials__card-title">{props.name}</h3>
              <span className="testimonials__card-categorie">
                {props.status}
              </span>
            </div>
          </div>

          <p className="testeminials__card-text">{props.text}</p>
        </div>
      </article>
    </>
  );
};

export default TestimonialsCard;
