import React from "react";
import './ProjectcardStyles.css'
import CertificationsCardData from '../components/CertificationsCardData'
import CertificateCard from './CertificateCard'

const Cerificate = () => {
  return (
    <>
    <div className="work-container">
        <h1 className="project-heading">Certifications</h1>
        <div className="project-container">
            {CertificationsCardData.map((val,ind)=>{
                return(
                    <CertificateCard
                    key={ind}
                    img={val.img}
                    name = {val.name}
                    issue = {val.issue}
                    link = {val.link}
                    />
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Cerificate