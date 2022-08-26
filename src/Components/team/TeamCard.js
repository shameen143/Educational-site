import React from "react"
import { team } from "../../dummydata"
import './Team.css';

const TeamCard = () => {
  return (
    <div>
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TeamCard;
