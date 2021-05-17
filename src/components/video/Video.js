import React from "react";
import VideoPrueba from "../../video/video.mp4";


const Video = (props) => {

  const {  } = props;

  return (
    <video id="video">
      <source src={VideoPrueba} type="video/mp4" />
      <source src="mov_bbb.ogg" type="video/ogg" />
    </video>
  );
};

export default Video;
