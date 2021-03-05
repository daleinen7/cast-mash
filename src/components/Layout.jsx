import React from 'react';
import MashButton from './MashButton'
import ActorSelect from './ActorSelect'
import ResultCard from './ResultCard'
import styled from 'styled-components'
import logo from '../static/images/CastMashLogo.png'

const Wrapper = styled.div`

`;

const ActorSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 542px;
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
				<ActorSelect 
					handleChangeActor={props.handleChangeActorB}
					actorPic = {props.actorBPicture}
				/>
			</ActorSection>
			<MashButton handleClick = {props.handleClick}/>
			<ResultCard movieList = {props.movieList}/>
		</Wrapper>
  	)
}