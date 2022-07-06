import React from "react";
import Hakim from '../assets/Hakim.jpg'
import Firas from '../assets/Firas.jpg'
import Aya from '../assets/Aya.jpg'
import Syafiq from '../assets/Syafiq.jpg'

const Team = () => {
    const data = [
        {name:'Hakim', role:'Project Manager', picture:Hakim},
        {name:'Firas', role:'Cloud Engineer', picture:Firas},
        {name:'Aya', role:'AI Engineer', picture:Aya},
        {name:'Syafiq', role:'Software Engineer', picture:Syafiq},

    ]
    return(
        <div className="container my-5 Team">
            <div className="fs-2 fw-bold mb-5">Our Team</div>
            <div className="row">
                {data.map((team,i)=>(
                    <div className="col-12 col-md-3 col-sm-6 px-2 my-2" key={i}>
                        <img src={team.picture} className="w-50 rounded-circle" alt="profile"/>
                        <div className="fs-5 fw-bold mt-3">{team.name}</div>
                        <div className="mt-1">{team.role}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team