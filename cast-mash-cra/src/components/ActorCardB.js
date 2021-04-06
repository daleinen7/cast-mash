import React from 'react'
import './ActorCard.css'
import imagePlaceholder from '../static/02.png'

function ActorCardB({ handleChangeActorB, actorBPicture, userInputActorB }) {
  if (!actorBPicture) {
    return (
      <div className="actor-card">
        <div className="actorImageHolder">
          <img className="image-placeholder" src={ imagePlaceholder } alt="profile placeholder" />
        </div>
        <input type='text' placeholder="Actor Name" onChange={ handleChangeActorB } />
      </div>
    );
  } else {
    return (
      <div className="actor-card">
        <div className="actorImageHolder">
          <img src={ actorBPicture } alt={ userInputActorB } />
        </div>
          <input type='text' onChange={ handleChangeActorB } />
      </div>
    );
  }
};

export default ActorCardB;