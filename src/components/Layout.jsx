import React from 'react';
import MashButton from './MashButton';
import ActorSelect from './ActorSelect';
import ResultCard from './ResultCard';
import styled from 'styled-components';
import biglogo from '../static/images/biglogo.png';
import bg from '../static/images/seatsbg.png';
import { PlusCircle } from "phosphor-react";

const Wrapper = styled.div`
  background-image: url(${bg}); 
  background-repeat: no-repeat;
  bottom: 0; 
  background-size: cover;
  height: 100vh;
  background-color: #000;
`;

const Main = styled.div`
	margin: 0 auto; 
	width: 900px;
	
	`


const ActorSection = styled.div`
	position: relative; 
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center; 
	min-width: 35vw;
	margin: 0 auto;
`;



export default function Layout(props) {

  	return(
		<Wrapper>
				<Main>
				<h1><img src={biglogo} alt="Cast Mash" /></h1>
			<ActorSection>
				<ActorSelect 
					handleChangeActor={props.handleChangeActorA}
					actorPic = {props.actorAPicture}
				/>
				<PlusCircle size={40} style={{ color: "#fff" }}/>
				<ActorSelect 
					handleChangeActor={props.handleChangeActorB}
					actorPic = {props.actorBPicture}
				/>
			</ActorSection>
			<MashButton handleClick = {props.handleClick}/>
			{/* <ResultCard 
				movieList={props.movieList}
				actorAPic={props.actorAPicture}
				actorBPic = {props.actorBPicture}
			/> */}
			<>
				{props.movieList.map((movie, idx) => (
					<ResultCard 
						key = {idx}
						title={movie.title}
						poster={movie.poster_path}
						overview={movie.overview}
						releaseDate={movie.release_date}
					/>
				))}
					</>
				</Main>
		</Wrapper>
  	)
}