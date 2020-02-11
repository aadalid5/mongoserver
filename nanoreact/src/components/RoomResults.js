import React from "react";

const RoomResults = ({estimations, onRouteChange}) => {
    console.log({estimations})

    return (
        <div>            
            
            <p>show results...</p>
            <button 
                type="button"
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue"
                onClick={()=>onRouteChange('home')}
                >
                Vote again
            </button>
        </div>
    )
};

export default RoomResults;