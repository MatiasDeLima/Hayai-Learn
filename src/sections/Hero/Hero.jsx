import React from "react";
import "./Hero.css";
import Button from "../../components/Button/Button.jsx";
import { heroLine, heroImage, featureImage4 } from "../../assets/images/index.js";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__circle-shadow-1"></div>
      <div className="hero__circle-shadow-2"></div>

      <div className="hero__container container grid">
        <div className="hero__data">
          {/* Geometryc decoration */}
          <div className="geometry hero__geometry-1 geometry__12 geometry__blue"></div>
          <div className="geometry hero__geometry-2 geometry__8 geometry__blue"></div>
          <div className="geometry hero__geometry-3 geometry__12 geometry__orange"></div>

          <h1 className="hero__title">
            Learn <span className="orange__text-color">Japanese</span>
            <span className="h1__decoration">
              Fast with
              <span className="h1__colum">
                Youtube
                <img src={heroLine} alt="" className="hero__text-line" />
              </span>
            </span>
            <span className="orange__text-color">Immersion.</span>
          </h1>

          <p className="hero__description">
            The fun and sustainable way to learn Japanese by watching your
            favorite Youtubers, TV shows, animes, music, games. Designed for
            effortlessly acquiring new vocabulary and grammar.
          </p>

          <Button text="Start 7-days for free trial" />
        </div>

        <div className="hero__image">
          {/* Image Geometry */}
          <div className="geometry hero__geometry-4 geometry__16 geometry__yellow"></div>
          <div className="geometry hero__geometry-5 geometry__10 geometry__blue"></div>
          <div className="geometry hero__geometry-6 geometry__8 geometry__green"></div>

          {/* Youtube */}
          <div className="hero__youtube">
            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.512 2.09649C18.3056 1.30295 17.8529 0.631286 17.0773 0.420036C15.6717 0.0354525 9.90381 0.000244141 9.90381 0.000244141C9.90381 0.000244141 4.13587 0.0354525 2.73028 0.420036C1.95469 0.631286 1.50469 1.30295 1.29557 2.09649C0.919691 3.53462 0.903809 6.50024 0.903809 6.50024C0.903809 6.50024 0.919691 9.46587 1.29557 10.904C1.50204 11.6975 1.95469 12.3692 2.73028 12.5805C4.13587 12.965 9.90381 13.0002 9.90381 13.0002C9.90381 13.0002 15.6717 12.965 17.0773 12.5805C17.8529 12.3692 18.3056 11.6975 18.512 10.904C18.8879 9.46587 18.9038 6.50024 18.9038 6.50024C18.9038 6.50024 18.8879 3.53462 18.512 2.09649Z" fill="#FF0000"/>
              <path d="M12.9744 6.50024L8.20969 3.79191V9.20858" fill="white"/>
            </svg>
          </div>

          {/* Rate Coponent */}
          <div className="hero__rate">
            <img src={featureImage4} alt="" className="hero__rate-img"/>

            <div className="hero__rate-date">
              <h4 className="hero__rate-title">
                10k <span className="orange__text-color">+</span>
              </h4>
              <span className="hero__rate-categorie">Online Studants</span>
            </div>
          </div>

          {/* Advantage Component */}
          <div className="hero__advantages">
            <h3 className="hero__advantages-title">Our Advantages</h3>

            <ul className="hero__advantages-list">
              <div className="hero__advantages-item">
                <div className="hero__advantages-icon">
                  <i className="ri-checkbox-circle-line"></i>
                </div>

                <p className="hero__advantages-text">Fast learning</p>
              </div>

              <div className="hero__advantages-item">
                <div className="hero__advantages-icon">
                  <i className="ri-checkbox-circle-line"></i>
                </div>

                <p className="hero__advantages-text">Youtube Platform</p>
              </div>

              <div className="hero__advantages-item">
                <div className="hero__advantages-icon">
                  <i className="ri-checkbox-circle-line"></i>
                </div>

                <p className="hero__advantages-text">Easy to learn</p>
              </div>
            </ul>

            <a className="hero__advantages-button">
              See More <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <img src={heroImage} alt="" className="hero__img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
