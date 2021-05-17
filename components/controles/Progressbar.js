import React, { Fragment } from 'react';
const Progressbar = () => {
    return ( 
        <Fragment>
            <div className="progressBar">
                <div className="currentBar"></div>
                <div className="circle-control"></div>
            </div>
        </Fragment>
     );
}
 
export default Progressbar;