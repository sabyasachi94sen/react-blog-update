import React from "react";
import './style.css'



const Mountain =(props)=>{

    console.log(props.details)
    return (

        <>
        <p>{props.details.desc}</p>
        
        <img src={props.details.image} alt="img of a mountain"  className="mountain"/>
        
        </>
    )
}

export default Mountain;