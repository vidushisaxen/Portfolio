import React from "react";
import './ProjectcardStyles.css'
import { NavLink } from "react-router-dom";


const CertificateCard = (props) => {  
  return (
    <>
    <div className="project-card">
        <img src={props.img} alt="certificate image"/>
        <h2 className="project-title">{props.name}</h2>
        <div className="pro-details">
            <h3>Issued On: {props.issue}</h3>
            <div className="pro-btns">
                <NavLink to={props.link} className="btn">Open</NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default CertificateCard