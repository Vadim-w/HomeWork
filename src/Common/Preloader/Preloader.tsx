import React from 'react';
import preloader from '../../assecs/images/preloader1.gif'

export const Preloader = () => {
    return (
        <img src={preloader} alt="preloader" style={{width: '260px', height:'30px', display: "block",  marginLeft: "auto", marginTop: "50px",marginRight: "auto"}}/>
        )
}