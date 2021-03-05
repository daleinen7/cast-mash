import React from 'react';
import MashButton from './MashButton'
import ActorSelect from './ActorSelect'
import ResultCard from './ResultCard'
import styled from 'styled-components'
import logo from '../static/images/CastMashLogo.png'
import { PlusCircle } from "phosphor-react";

const Wrapper = styled.div`

`;

const ActorSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center; 
	min-width: 35vw;
	margin: 0 auto;
`

export default function Layout(props) {

  	return(
		<Wrapper>
			<h1><img src={logo} alt="Cast Mash"/></h1>
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
						title = {movie.title}
					/>
				))}
			</>
		</Wrapper>
  	)
}