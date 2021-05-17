import React from 'react';
const Play = (props) => {

    const { handlerPlay, play } = props;

    return ( 
        <div className="playButton" onClick={handlerPlay}>
            {play ? (<i className="fas fa-pause"></i>) : (<i className="fas fa-play"></i>)}
        </div>
     );
}
 
export default Play;