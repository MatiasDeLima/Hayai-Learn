import React from "react";
import "./FeaturesCard.css";

export const FeaturesCard = (props) => {
  return (
    <>
      <svg className="features-mask">
        <clipPath id="features-clip">
          <path
            d="M163.5 38.0936C193.901 38.0936 190.81 0 226.364 0H274.236C292.705 0 301.939 0 308.994 3.59088C315.199 6.7495 320.244 11.7896 323.406 17.9887C327 25.0362 327 34.2619 327 52.7133V342.287C327 360.738 327 369.964 323.406 377.011C320.244 383.21 315.199 388.251 308.994 391.409C301.939 395 292.705 395 274.236 395H52.7645C34.2952 395 25.0605 395 18.0062 391.409C11.801 388.251 6.75605 383.21 3.59436 377.011C2.38419e-07 369.964 0 360.738 0 342.287V52.7133C0 34.2619 2.38419e-07 25.0362 3.59436 17.9887C6.75605 11.7896 11.801 6.7495 18.0062 3.59088C25.0605 0 34.2952 0 52.7644 0H101.667C133.614 0 133.099 38.0936 163.5 38.0936Z"
            fill="white"
          />
        </clipPath>
      </svg> 

        <article className="features__card">
            <div className="fetures__card-circle">
            <i className="ri-global-line"></i>
            </div>

            <div className="features__card-bg">
              <div className="features__card-data">
                  <img src={props.image} alt="" />

                  <h3 className="features__card-title">
                  {props.title}
                  </h3>

                  <p className="features__card-description">
                  {props.content}
                  </p>
              </div>

              <button className="button features__button">
                  Learn More
                  <div className="button__icon">
                  <i className="ri-arrow-right-up-line"></i>
                  </div>
              </button>
            </div>
        </article>
    </>
  );
};
