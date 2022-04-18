import React from 'react';
import ReactPlayer from "react-player";
import './Home.css';



const ServicesSection = () => {
  return (
    <div>
     <div className="Videos">

        <div>
          <button className="Play-Video" type="button">Play Videos</button>
        </div>
        <div className="video1" >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=gMsOw2urOQU" width={350} height={200} controls="controls" autoPlay={true}
          />
          <div>
            <label className="video-title1">Video Title</label>
          </div>
        </div>


        <div className="video2" >
          <ReactPlayer
            url="https://youtu.be/kFS6KAu6EQA" width={350} height={200} controls="controls" autoPlay={true}
          />
          <div>
            <label className="video-title2">Video Title</label>
          </div>
        </div>

        <div className="video3" >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=JHnmOSTwkmA" width={350} height={200} controls="controls" autoPlay={true}
          />
          <div>
            <label className="video-title3">Video Title</label>
          </div>
        </div>


        <div className="video4" >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=JHnmOSTwkmA" width={350} height={200} controls="controls" autoPlay={true}
          />
          <div>
            <label className="video-title4">Video Title</label>
          </div>
        </div>

        <div className="video5" >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=JHnmOSTwkmA" width={350} height={200} controls="controls" autoPlay={true}
          />
          <div>
            <label className="video-title5" >Video Title</label>
          </div>
        </div>

        <div className="video6" >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=JHnmOSTwkmA" width={350} height={200} controls="controls" autoPlay={true}
          />
          <div>
            <label className="video-title6">Video Title</label>
          </div>
        </div>

        <div>
          <button className="Videos-View-All" type="button">View All Videos </button>
        </div>

      </div>
      <div>

      </div>
    </div>
  );
}
export default ServicesSection;
