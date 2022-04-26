import React from "react";
import northernPic from "./img/NorthernHemisphere.jpg"
import southernPic from "./img/SouthernHemisphere.jpg"
import './Hemisphere.css';

const hemisphereConfig = {
    Northern : {
        text:'It is northern hemisphere',
        picture: northernPic
    },
    Southern: {
        text:'It is southern hemisphere',
        picture: southernPic
    }
};

const HemisphereDisplay = ({ latitude }) => {

    const hemisphere = latitude > 0? 'Northern': 'Southern'; //Operador ternario
    /*const picture = latitude > 0? northernPic:southernPic; //Operador ternario*/
    const {text, picture} = hemisphereConfig[hemisphere];
    return (
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={picture} alt="hemisphere"/>
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    );

    /*if(latitude>0){
        return <div>Northern Hemisphere</div>
    }
    else{
        return <div>Southern Hemisphere</div>
    }*/
};

export default HemisphereDisplay;