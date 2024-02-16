import React from "react";
import "./VideoComponent.css";
import { videoImage1 } from "../../assets/images/index.js";

const VideoComponent = () => {
  return (
    <div className="video__component">
      <h3 className="video__component-title">Japanese with John Miyazaki</h3>
      <p className="video__component-description">N5 - Beginner level</p>

      <div className="video__component-play">
        <div className="video__play-content">
          <div className="video__progress-text">
            <span>1:10</span>

            <span>15:00</span>
          </div>

          <div className="video__progreess"></div>

          <div className="video__component-actions">
            <div className="video__actions-flex">
              <button className="video__component-button background-orange white__color">
                <i class="ri-pause-mini-fill"></i>
              </button>

              <button className="video__component-button">
                <i class="ri-loop-left-fill"></i>
              </button>

              <button className="video__component-button">
                <i class="ri-loop-right-line"></i>
              </button>
            </div>

            <div className="video__actions-flex">
              <button className="video__component-button">
                <i class="ri-movie-2-line"></i>
              </button>
              <button className="video__component-button">
                <i class="ri-folder-video-line"></i>
              </button>
              <button className="video__component-button">
                <i class="ri-sidebar-unfold-line"></i>
              </button>
            </div>
          </div>
        </div>

        <img src={videoImage1} alt="" className="video__component-img" />
      </div>

      <div className="video__component-bottom">
        <div className="video__component-tabs">
          <div className="video__tab tab-active">Vocabulary</div>
          <div className="video__tab tab-desable">
            Grammar
            <span>0</span>
          </div>
        </div>

        <div className="video__component-legends">
          <div className="video__legend-content">
            <h3 className="video__legend-text">
              今日は、動詞の時制の微妙な点に迫り、
            </h3>

            <button className="video__legend-copy">
              <i class="ri-file-copy-fill"></i>
            </button>
          </div>

          <div className="video__legend-content">
            <h3 className="video__legend-text">
              Today, we will delve into the...
            </h3>

            <button className="video__legend-copy">
              <i class="ri-file-copy-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
