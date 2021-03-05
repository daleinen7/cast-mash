import React, { useState } from 'react'
import Axios from 'axios'
import Layout from './Layout'

const ApiTesting = () => {

	// create a .env file in root (cast-mast-cra) directory with your api key 
	const REACT_APP_KEY = process.env.REACT_APP_MOVIEDB_KEY

	// list of movies for actorA and actorB
	const [dataA, setDataA] = useState([])
	const [dataB, setDataB] = useState([])

	// actorA and actorB are state variables that hold the users' input on the first two input boxes
	const [userInputActorA, setUserInputActorA] = useState('')
	const [userInputActorB, setUserInputActorB] = useState('')

	// actor pictures, which is a string literal of the URL address to be used in <img src=" ">
	const [actorAPicture, setActorAPicture] = useState('')
	const [actorBPicture, setActorBPicture] = useState('')

	// the search URLS are the initial api calls using inputs from the user
	const searchUrlActorA = `https://api.themoviedb.org/3/search/person?api_key=${REACT_APP_KEY}&language=en-US&query=${userInputActorA}`
	const searchUrlActorB = `https://api.themoviedb.org/3/search/person?api_key=${REACT_APP_KEY}&language=en-US&query=${userInputActorB}`

	// mashedMovies is the epitome of this app, it will contain a list of movies if any collaborations were found
	const [mashedMovies, setMashedMovies] = useState([])

	// getUserSearch is the mash button click handler
	async function getUserSearch() {
    // 1. await response from the API
    const responseActorA = await Axios(searchUrlActorA)
		const responseActorB = await Axios(searchUrlActorB)

    // 2. extract actor ID's
    const actorAId = responseActorA.data.results[0].id;
    const actorBId = responseActorB.data.results[0].id;
    
    // 3. set of URLs with actors' ID's included
    const actorACreditsURL = `https://api.themoviedb.org/3/person/${actorAId}/combined_credits?api_key=${REACT_APP_KEY}`
    const actorBCreditsURL = `https://api.themoviedb.org/3/person/${actorBId}/combined_credits?api_key=${REACT_APP_KEY}`
    
		// 4. movieDB handles image URL's with 3 sections --  The base URL, the size of image configuration, and the image type path.  For actors' profile, we need the "profile_path" from the API response.
		const actorAprofilePath = responseActorA.data.results[0].profile_path
		const actorBprofilePath = responseActorB.data.results[0].profile_path

		/* 
		the 3 sections broken down for clarity

		base URL - "http://image.tmdb.org/t/p/"
		image configuration - "h632" (I assume this means 'height 632')
		type path - actorAprofilePath and actorBprofilePath

		thus...

		base_url/img_config/type_path
		*/

		//	5. the fully constructed URL address
		const actorAprofileUrl = `http://image.tmdb.org/t/p/h632/${actorAprofilePath}`
		const actorBprofileUrl = `http://image.tmdb.org/t/p/h632/${actorBprofilePath}`

    // 6. credits call for each actor to retrieve individual works
    const actorACreditsCall = await Axios(actorACreditsURL);
    const actorBCreditsCall = await Axios(actorBCreditsURL);
		
		// 7. list of movies for each actor
    let actorAMovies = actorACreditsCall.data.cast;
    let actorBMovies = actorBCreditsCall.data.cast;
		
		// 8. state will hold this list of movies
		setDataA(actorAMovies);
		setDataB(actorBMovies);
		
		// 9. state will also hold profile picture URL
		setActorAPicture(actorAprofileUrl);
		setActorBPicture(actorBprofileUrl);

		// 10. pass movie lists (arrays) of both actors as arguments to check for collaboration
		getCollaboration(actorAMovies, actorBMovies);
	}

	// getCollaboration takes array of movie list from actorA and actorB; checks whether or not they worked together and returns all titles if available
	const getCollaboration = (actorA, actorB) => {
		let result = [];

		for (let i = 0; i < actorA.length; i++) {
			for (let j = 0; j < actorB.length; j++) {
				if (actorA[i].id === actorB[j].id && actorA[i].title !== undefined) {
					result.push(actorA[i].title)
				}
				// TODO: implement else statement to display "no collaborations" if no collaborations were found
			}
		}

		// set state to have list of movie titles found in collaboration
		setMashedMovies(result);
	}

	// grabs user input for the first actorA and puts it into state 
	const handleChangeActorA = (event) => {
		// FIXME: we can deconstruct here for more clarity.
		// const { value } = event.target
		setUserInputActorA(event.target.value)
	}
	
	// grabs user input for the second actorB and puts it into state 
	const handleChangeActorB = (event) => {
		// FIXME: we can deconstruct here for more clarity.
		// const { value } = event.target
		setUserInputActorB(event.target.value)
	}

    // handle click function for the mash button
	const handleClick = () => {
    getUserSearch()
	}

	// this variable "movieList" will map through list of "mashedMovies" and render <h1> tags for each "movieTitle"
	let movieList = mashedMovies.map((movieTitle, idx) => {
		return (
			<h1 key={idx}>{movieTitle}</h1>
		)
	})

	return (

		<Layout/>

		// <div>
		// 	<div>
		// 		<input type='text' className='actor1' onChange={handleChangeActorA} />
		// 	</div>
		// 	<div>
		// 		<input type='text' className='actor1' onChange={handleChangeActorB} />
		// 		<button onClick={handleClick}>MASH</button>
		// 	</div>
		// 	<div>
		// 		<img src={ actorAPicture } alt="actor-1"></img>
		// 		<img src={ actorBPicture } alt="actor-2"></img>
		// 	</div>
		// 	<div>
		// 		{ movieList }
		// 	</div>
		// </div>
	)
}

export default ApiTesting;