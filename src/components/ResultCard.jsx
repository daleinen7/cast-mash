import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${'' /* background-color: #fff; */}
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const Card = styled.div`
  background-color: #fff;
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px; 
  color: #000;
  font-size: .9em;
  font-family: Sora;
  border-radius: 5px;
  padding: 20px;
`;


export default function ResultCard(props) {

  if (!props.actorAPic && !props.actorBPic) {
    return (
    <div>
      </div>
    )
  } else if (props.movieList.length <= 0 && props.actorAPic && props.actorBPic) {
      return (
        <Container>
          <Card>
            They have not been in a movie together
      </Card>
        </Container>
      
      )
    
  } else {
    return (
      <Container>
        <Card>
          {props.movieList}
        </Card>
      </Container>
    )
  }
}