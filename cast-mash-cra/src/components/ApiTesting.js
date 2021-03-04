import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const ApiTesting = () => {

    // create a local .env.local file in cast-mast-cra directory with your api key 
    const REACT_APP_KEY = process.env.REACT_APP_MOVIEDB_KEY

	const [dataA, setDataA] = useState([])
	const [dataB, setDataB] = useState([])

	// actorA and actorB are state variables that hold the users' input on the first two input boxes
	const [userInputActorA, setUserInputActorA] = useState('')
	const [userInputActorB, setUserInputActorB] = useState('')

	// once we are able to get the credits i thought it would be cool to throw that into state
	const [actorAPicture, setActorAPicture] = useState('')
	const [actorBPicture, setActorBPicture] = useState('')

	// the search URLS are the initial api calls -- taking the user input that lives in state under actorA and B
	const searchUrlActorA = `https://api.themoviedb.org/3/search/person?api_key=${REACT_APP_KEY}&language=en-US&query=${userInputActorA}`
	const searchUrlActorB = `https://api.themoviedb.org/3/search/person?api_key=${REACT_APP_KEY}&language=en-US&query=${userInputActorB}`

	const [mashedMovies, setMashedMovies] = useState([])

	// getUserSearch is the function attached to the button right now
	async function getUserSearch() {
    // await response from the API
    const responseActorA = await Axios(searchUrlActorA)
		const responseActorB = await Axios(searchUrlActorB)

    // this contains the actors' ID to use
    const actorAId = responseActorA.data.results[0].id;
    const actorBId = responseActorB.data.results[0].id;
    
    // URLs with actors ID included
    const actorACreditsURL = `https://api.themoviedb.org/3/person/${actorAId}/combined_credits?api_key=${REACT_APP_KEY}`
    const actorBCreditsURL = `https://api.themoviedb.org/3/person/${actorBId}/combined_credits?api_key=${REACT_APP_KEY}`
    
		// URLs with actors profile image
		const actorAprofilePath = responseActorA.data.results[0].profile_path
		const actorBprofilePath = responseActorB.data.results[0].profile_path
		const actorAprofileUrl = `http://image.tmdb.org/t/p/h632/${actorAprofilePath}`
		const actorBprofileUrl = `http://image.tmdb.org/t/p/h632/${actorBprofilePath}`

    // Credits for each actor
    const actorACreditsCall = await Axios(actorACreditsURL);
    const actorBCreditsCall = await Axios(actorBCreditsURL);
		
		// List of movies for each actor
    let actorAmovies = actorACreditsCall.data.cast;
    let actorBmovies = actorBCreditsCall.data.cast;
		
		// state for movie titles
		setDataA(actorAmovies);
		setDataB(actorBmovies);
		
		// state for profile picture URL
		setActorAPicture(actorAprofileUrl);
		setActorBPicture(actorBprofileUrl);

		getCollaboration();
		}

// TODO: loop to check for any movies actors were in together
const getCollaboration = () => {
	let array = [];

	for (let i = 0; i < dataA.length; i++) {
		for (let j = 0; j < dataB.length; j++) {
			if (dataA[i].id === dataB[j].id && dataA[i].title !== undefined) {
				array.push(dataA[i].title)
			}
		}
	}

}

	// grabs user input for the first input and puts it into state 
	const handleChangeActorA = (event) => {
		setUserInputActorA(event.target.value)
	}

    // grabs user input for the second input and puts it into state 
	const handleChangeActorB = (event) => {
		setUserInputActorB(event.target.value)
	}

    // handle click function for the mash button 
	const handleClick = () => {
    getUserSearch()
	}

	// console.log(mashedMovies)

	return (
		<div>
			<div>
				<input type='text' className='actor1' onChange={handleChangeActorA} />
			</div>
			<div>
				<input type='text' className='actor1' onChange={handleChangeActorB} />
				<button onClick={handleClick}>MASH</button>
			</div>
		</div>
	)
}

export default ApiTesting;