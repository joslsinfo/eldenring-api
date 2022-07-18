import React from 'react'

const Card = ({elden}) => {
    console.log(elden);
   
  return (
    <div className="eldenCard">
        <p className="para"> <span className="title">Description :</span> {elden.description}</p>
        <h2>{elden.id}</h2>
        <div className="images">
          <img src={elden.image} alt={"photo " + elden.name} />
        </div>
        <p><span className="title">Location : </span> {elden.location}</p>
        <p><span className="title">Name :</span> {elden.name}</p>


    </div>
  )
}

export default Card