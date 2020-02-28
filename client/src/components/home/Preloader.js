import React from 'react';


const Preloader = () => {
    return(
        <div className="preloader">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    );
}


export default Preloader;