import React from 'react';
import styled from 'styled-components';
import ticket from '../static/images/ticket.png';
import Moment from 'react-moment';


const Container = styled.div`
  width: 100vw;
  display: flex !important;
  align-items: center;
  justify-content: center;
  font-family: Sora;
  font-size: 1.1rem; 
`;

const Card = styled.div`
  background-image: url(${ticket});
  background-size: contain; 
  background-repeat: no-repeat;
  background-position: center center;
  margin: 50px 0px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
`;

const CardContent = styled.div`
  width: 800px;  
  margin: 50px 0px;
  padding: 20px;
  text-align: left; 
`;
const PosterContent = styled.div`
  width: 210px; 
  margin: 50px 0px;
  padding: 20px;
`;

const Image = styled.img`
  width: 200px; 
  background: #FFFFFF;
  box-sizing: border-box;
  padding: 20px; 
`

export default function ResultCard(props) {

  return (
    <Container>
      <Card>
        <PosterContent>
          <Image src={`https://image.tmdb.org/t/p/w500/${props.poster}`} />
        </PosterContent>
        <CardContent>
        <b>{props.title} - <Moment format="YYYY">{props.releaseDate}</Moment></b><br /> 
          <br />
          <b>Synopsis: </b><br />
          {props.overview}
        </CardContent>
      </Card>
    </Container>
  )
}