import React from "react";
import avatar from "../assess/teammember.png";

const Voted = ({vote, user,viewTeamResults}) => {
    return(
        <div className="br3 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <img 
                className="dib bg-light-blue br3 pa2 ma2 grow shadow-4 tc center"
                src= {avatar}
                alt= "user"
                width="200"                
            />   
            <h2> {`${user} your estimation was ${vote}`} </h2>
            <button 
                type="button"
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue"
                onClick={viewTeamResults}
                >
                See team estimations
            </button>
            
        </div>
    )
};

export default Voted;