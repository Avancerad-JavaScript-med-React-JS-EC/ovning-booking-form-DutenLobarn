import React from 'react';

function TurRetur(props){
    return(
        <div className="citys-wrapper">
            <div className="city-input-left">
                <div className="city-name">{props.från}</div>
                <p className="city-time">10.30</p>
            </div>
            <div className="city-input-right">
                <div className="city-name">{props.till}</div>
                <p className="city-time">14:45</p>
            </div>
        </div>
    )
};

export default TurRetur;