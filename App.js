import React, { useState, useEffect } from "react";
import Video from "./components/video/Video";
import "./app.css";
import Play from "./components/controles/Play";
import Progressbar from "./components/controles/Progressbar";
import Volume from "./components/controles/Volume";

const App = () => {
  const video = document.getElementById("video");

  const [play, setplay] = useState(false);

  const handlerPlay = () => {
    setplay(!play);
  };
  
  useEffect(() => {
    if (video) {
      if (play) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [video, play]);

  return (
    <div className="videoPlayer">
      <Video />
      <div className="controls">
        <Progressbar />
        <div className="controls-basics">
          <div className="btn-player">
            <Play handlerPlay={handlerPlay} play={play} />
            <Volume />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
