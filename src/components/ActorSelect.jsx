import React from 'react';
import defaultActor from '../static/images/Vector.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px;
`;

const Input = styled.input`
  width: 150px; 
  padding: .5em;
  margin: 1em;
  color: #000;
  background: fff;
  border: none;
  border-radius: 3px;
  font-family: Sora;
  font-size: 1em;
  ${'' /* box-shadow: 12px 12px 2px 1px rgba(122, 98, 254, .5); */}
  box-shadow: 5px 5px 5px 1px rgba(122, 98, 254, .8);
  
`;

const Image = styled.img`
  width: 200px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 1px rgba(255, 255, 255, .2);
`


export default function ActorSelect(props) {
  if (props.actorPic) {
    return (
      <Wrapper>
        <Image src={props.actorPic} alt="Actor" />
        <Input type='text' className='actor1' onChange={props.handleChangeActor} />

      </Wrapper>
    )
  } else {
    return(
      <Wrapper>
          <img src={defaultActor} alt="default placeholder" />
        <Input type='text' className='actor1' onChange={props.handleChangeActor} />
      </Wrapper>
    )
  }
}