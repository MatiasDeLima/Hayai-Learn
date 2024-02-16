import React from 'react';
import "./VideoAnalize.css";
import Button from '../../components/Button/Button.jsx';
import VideoComponent from '../../components/VideoComponent/VideoComponent.jsx';
import { analizeImage } from "../../assets/images/index.js";
import { videoImage1 } from "../../assets/images/index.js";

const VideoAnalize = () => {
  return (
    <section className="video section">

      <div className="video__shadow"></div>

      <div className="video__container grid">
        <div className="video__data">
            <h2 className="video__title">
              Import & Analyze Video
            </h2>

            <p className="video__description text__margin-1">
              Learn from any publicly available Youtube video with our import tool. 
              Also, get a difficult breakdown of a video before watching it.
            </p>

            <p className="video__description text__margin-2">
              Learn from any publicly available Youtube video with our import tool. 
              Also, get a difficult breakdown of a video before watching it.
            </p>

            <Button text="Learn More"/>

            <img src={analizeImage} alt="" className="video__data-img"/>

            <div className="video__data-bg"></div>
        </div>

        <div className="video__content container">
            <VideoComponent 
              image={videoImage1}
              title="Japanese with John Miyazaki"
            />
        </div>
      </div>
    </section>
  )
}

export default VideoAnalize;