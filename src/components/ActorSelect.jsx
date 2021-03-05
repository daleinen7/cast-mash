import React from 'react';
import defaultActor from '../static/images/Vector.png'
import styled from 'styled-components'

const Wrapper = styled.div`

`;

export default function ActorSelect(props) {
  if (props.actorPic) {
    return (
      <Wrapper>
          <img src={props.actorPic} alt="Actor"/>
        <input type='text' className='actor1' onChange={props.handleChangeActor} />
      </Wrapper>
    )
  } else {
    return(
      <Wrapper>
          <img src={defaultActor} alt="default placeholder" />
        <input type='text' className='actor1' onChange={props.handleChangeActor} />
      </Wrapper>
    )
  }
}