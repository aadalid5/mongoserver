import React from "react";
import card1 from "../assess/cards/card1.png";
import card2 from "../assess/cards/card2.png";
import card3 from "../assess/cards/card3.png";

const Card = ({ onCardClick}) => {
    return(
        <div>
            <img 
                className="dib bg-light-blue br3 pa2 ma2 grow shadow-4 tc"
                src= {card1}
                alt= "card1"
                width="200"
                onClick= {()=>onCardClick("1")}
            />            
            <img 
                className="dib bg-light-blue br3 pa2 ma2 grow shadow-4 tc"
                src= {card2}
                alt= "card2"
                width="200"
                onClick= {()=>onCardClick("2")}
            /> 
            <img 
                className="dib bg-light-blue br3 pa2 ma2 grow shadow-4 tc"
                src= {card3}
                alt= "card3"
                width="200"
                onClick= {()=>onCardClick("3")}
            /> 

        </div>
    )
};

export default Card;