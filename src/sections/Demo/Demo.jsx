import React from "react";
import "./Demo.css";
import VideoComponent from "../../components/VideoComponent/VideoComponent.jsx";
import { videoImage2 } from "../../assets/images/index.js";
import Button from "../../components/Button/Button.jsx";

const Demo = () => {
  return (
    <section className="demo section">

      <div className="demo__shadow"></div>

      <div className="demo__container container grid">
        <div className="demo__data">
          <h2 className="demo__title">
            Most intelligent <br />
            <span className="orange__text-color">personalized</span> dictionary <br />
            each word has <br />
          </h2>

          <p className="demo__description">
            Always a pleasure to work with matias team. such professional and
            happy people and you know you receive a quick, innovative and no
            fuss service.
          </p>

          <div className="demo__data-infos">
            <div className="demo__infos-item">
              <div className="demo__item-icon">
                <i className="ri-checkbox-circle-line"></i>
              </div>

              <h3 className="demo__item-text">Fast Progress</h3>
            </div>

            <div className="demo__infos-item">
              <div className="demo__item-icon">
                <i className="ri-checkbox-circle-line"></i>
              </div>

              <h3 className="demo__item-text">Easy Platform</h3>
            </div>

            <div className="demo__infos-item">
              <div className="demo__item-icon">
                <i className="ri-checkbox-circle-line"></i>
              </div>

              <h3 className="demo__item-text">Learn Easy</h3>
            </div>

            <div className="demo__infos-item">
              <div className="demo__item-icon">
                <i className="ri-checkbox-circle-line"></i>
              </div>

              <h3 className="demo__item-text">Start Now</h3>
            </div>
          </div>

          <Button 
            text="Learn More"
          />
        </div>

        <div className="demo__content">
          <VideoComponent
            image={videoImage2}
            title="Japanese with Maia Miyazaki"
          />
        </div>
      </div>
    </section>
  );
};

export default Demo;
