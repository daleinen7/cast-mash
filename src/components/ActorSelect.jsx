import React from 'react';
import defaultActor from '../static/images/spyman.png'
import styled from 'styled-components'

const Wrapper = styled.div`
	background: green;

`;

export default function ActorSelect() {
  return(
    <Wrapper>
      <img src="{ defaultActor }" alt="Placeholder"/>
    </Wrapper>
  )
}