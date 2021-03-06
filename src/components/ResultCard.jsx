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
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  margin-top: 50px; 
  color: #000;
  font-size: .8em;
  font-family: Sora;
  border-radius: 5px;
  padding: 20px;
`;


export default function ResultCard(props) {

  return (
    <Container>
      <Card>
        <p>
          Here's a movie {props.title} <br />
          {props.overview}<br />
          {props.release_date}<br />
          <img src={ `https://image.tmdb.org/t/p/w500/${props.poster}`} />
        </p>
      </Card>
    </Container>
  )
}