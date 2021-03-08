import React from 'react';
import MashButton from './MashButton';
import ActorSelect from './ActorSelect';
import ResultCard from './ResultCard';
import InfoModal from './InfoModal'; 
import Footer from './Footer'; 
import styled from 'styled-components';
import biglogo from '../static/images/biglogo.png';
import bg from '../static/images/seatsbg.png';
import { PlusCircle } from "phosphor-react";

const Wrapper = styled.div`
  background-image: url(${bg}); 
  background-repeat: no-repeat;
  bottom: 0; 
  background-size: cover;
  background-position: center center; 
  height: 100vh;
  background-color: #000;
@media (max-width: 800px) {
    flex-direction: column;
	width: 100vw;
	height: 100%; 
`;

const Icon = styled.img`
@media (max-width: 800px) {
    flex-direction: row;
	width: 20%;
	
`
const Main = styled.div`
	margin: auto; 
	width: 900px;
 @media (max-width: 800px) {
    flex-direction: column;
	width: 100vw;
	`

const ActorSection = styled.div`
	position: relative; 
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center; 
	min-width: 15vw;
	max-width: 100vw; 
	margin: 0 auto;
@media (max-width: 800px) {
    flex-direction: column;
	width: 100vw;
`;

const NotTogether = styled.div`
	position: relative;
	width: 40rem; 
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	background-color: #fff;
	color: #000;
	font-family: Sora;
	font-size: 1.1rem;
	margin-top: 10px;
	border: none;
	border-radius: 4px; 
@media (max-width: 800px) {
    flex-direction: column;
	width: 100vw;
`;




export default function Layout(props) {
	if (props.movieList.length <= 0 && props.actorAPicture) {
		return (
			<>
					<InfoModal />
			<Wrapper>
				<Main> 	
					<Icon src={biglogo} alt="Cast Mash" />
					<ActorSection>
						<ActorSelect
							handleChangeActor={props.handleChangeActorA}
							actorPic={props.actorAPicture}
						/>
						<PlusCircle size={40} style={{ color: "#fff" }} />
						<ActorSelect
							handleChangeActor={props.handleChangeActorB}
							actorPic={props.actorBPicture}
						/>
					</ActorSection>
					<MashButton handleClick={props.handleClick} />
					<div>
				
						<NotTogether>
							They were not in a movie together
						</NotTogether>
					</div>
				<Footer />
				</Main>
				</Wrapper>
				</>
				
	
		)
	} else {
		return (
			<>
			<Wrapper>
				<Main>
					<InfoModal />
					<Icon src={biglogo} alt="Cast Mash" />
					<ActorSection>
						<ActorSelect
							handleChangeActor={props.handleChangeActorA}
							actorPic={props.actorAPicture}
						/>
						<PlusCircle size={40} style={{ color: "#fff" }} />
						<ActorSelect
							handleChangeActor={props.handleChangeActorB}
							actorPic={props.actorBPicture}
						/>
					</ActorSection>
					<MashButton handleClick={props.handleClick} />
					<>
			
						{props.movieList.map((movie, idx) => (
							<ResultCard
								key={idx}
								title={movie.title}
								poster={movie.poster_path}
								overview={movie.overview}
								releaseDate={movie.release_date}
							/>
						))}
					</>
				</Main>
			</Wrapper>
			<Footer />
			</>
		)
	}
}