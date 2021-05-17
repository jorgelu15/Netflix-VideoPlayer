import React, { useEffect, useState } from "react";
const Volume = (props) => {
  const [volume, setvolume] = useState({
    value: 100,
  });

  let bar = document.querySelector(".slider-bar-container")
    ? document.querySelector(".slider-bar-container")
    : "";
  let popVolume = document.querySelector(".popup-volume-bar-content")
    ? document.querySelector(".popup-volume-bar-content")
    : "";
  let videoVolume = document.getElementById("video")
    ? document.getElementById("video")
    : "";
  let pos;

  const [mousedown, setmousedown] = useState(false);

  const [showvolume, setshowvolume] = useState(false);

  const handleVolume = (e) => {
    if (bar) {
      pos = ((e.pageY - 693) / bar.offsetHeight) * -100 + 100; //solo para la resolucion al 1920 100% en el navegador
      if (pos > 100) pos = 100;
      if (pos < 0) pos = 0;
    }

    setvolume({
      value: pos,
    });
  };

  const handleShowVolume = () => {
    setshowvolume(!showvolume);
  };

  //para ocultar y mostrar el pop up de volumen
  useEffect(() => {
    if (showvolume) {
      if (popVolume) popVolume.style.display = "block";
    } else {
      if (popVolume) popVolume.style.display = "none";
    }
  }, [showvolume, popVolume]);


  //para subir y bajar volumen
  useEffect(() => {
    if(videoVolume) {
     videoVolume.volume = volume.value/100;
    }
  }, [videoVolume, volume]);

  return (
    <div className="volumeButton" onMouseLeave={() => setshowvolume(false)}>
      <button
        className="fas fa-volume-up"
        onMouseEnter={() => handleShowVolume()}
      ></button>
      <div className="popup-volume-bar-content">
        <div className="popup-content">
          <div className="slider-volume">
            <div className="slider-bar-container" onMouseDown={handleVolume}>
              <div
                className="slider-bar-percentage"
                style={{ height: volume.value + "%" }}
                
              ></div>
              <div
                className="volume-circle-target"
                onClick={handleVolume}
                onMouseMove={mousedown ? (e) => handleVolume(e) : undefined}
                onMouseDown={() => setmousedown(true)}
                onMouseUp={() => setmousedown(false)}
                style={{ bottom: volume.value + "%" }}
              >
                <div
                  className="circle-volume"
                  tabIndex="0"
                  aria-label="Volumen"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={volume.value}
                  aria-valuetext={volume.value + " %"}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volume;
