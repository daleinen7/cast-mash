import React from 'react';
import MashButton from './MashButton'
import ActorSelect from './ActorSelect'
import ResultCard from './ResultCard'
import styled from 'styled-components'

const Wrapper = styled.div`
	background: blue;
	h1 {
		color: white;
	}
`;

export default function Layout() {


  	return(
		<Wrapper>
			<h1>Cast Mash</h1>
			<ActorSelect/>
			<ActorSelect/>
			<MashButton/>
			{/* Result Cards go Here Conditionally */}
		</Wrapper>
  	)
}