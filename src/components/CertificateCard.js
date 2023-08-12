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
            <p>{props.issued_on}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">Open</NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default CertificateCard