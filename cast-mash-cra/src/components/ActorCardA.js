import React from 'react'
import './ActorCard.css'
import imagePlaceholder from '../static/02.png'

function ActorCardA({ handleChangeActorA, actorAPicture, userInputActorA }) {
  if (!actorAPicture) {
    return (
      <div className="actor-card">
        <div className="actorImageHolder">
          <img className="image-placeholder" src={ imagePlaceholder } alt="profile placeholder" />
        </div>
        <input type='text' placeholder="Actor Name" onChange={ handleChangeActorA } />
      </div> 
    );
  } else {
    return (
      <div className="actor-card">
        <div className="actorImageHolder">
          <img src={ actorAPicture } alt={ userInputActorA } />
        </div>
          <input type='text' onChange={ handleChangeActorA } />
      </div>
    );
  }
};

export default ActorCardA;