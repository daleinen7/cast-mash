import React from 'react';
import styled from 'styled-components';
import ticket from '../static/images/ticket.png';
import Moment from 'react-moment';


const Container = styled.div`
  width: 100%;
  font-family: Sora;
  font-size: 1.1rem; 
`;

const Card = styled.div`
  background-image: url(${ticket});
  background-size: contain; 
  background-repeat: no-repeat;
  background-position: center center;
  margin: 10px 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
   @media (max-width: 800px) {
    flex-direction: row;
	  width: 100vw;
    background-color: #fff;
    height: 100%;
    left: 0;
    right: 0;
    padding: 10px; 
`;

const CardContent = styled.div`
  width: 800px;  
  margin: 50px 0px;
  padding: 20px;
  text-align: left;
   @media (max-width: 800px) {
    flex-direction: row;
	  width: 100vw;
    font-size: .95rem;
    padding: 10px; 
`;
const PosterContent = styled.div`
  margin: 50px 0px;
  padding: 20px;
   @media (max-width: 800px) {
     width: 30vw; 
    flex-direction: row;
	  margin: 0; 
`;

const Image = styled.img`
  width: 180px; 
  background: #FFFFFF;
  box-sizing: border-box;
  padding: 20px;
   @media (max-width: 800px) {
    flex-direction: row;
	  width: 30vw;
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