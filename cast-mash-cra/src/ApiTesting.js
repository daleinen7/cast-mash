import React, { useState } from 'react'
import Axios from 'axios'

const ApiTesting = () => {

    // create a local .env.local file in cast-mast-cra directory with your api key 



    const REACT_APP_KEY = process.env.REACT_APP_MOVIEDB_KEY

	const [data, setData] = useState([])

	// actorA and actorB are state variables that hold the users' input on the first two input boxes
	const [userInputActorA, setUserInputActorA] = useState('')
	const [userInputActorB, setUserInputActorB] = useState('')

	// actor ID is intended to be grabbed, and then put into the second api call for each actor to get their credits -- i haven't successfully been able to do both the initial set of calls and these calls in one function

	const [actorAId, setActorAId] = useState()
	const [actorBId, setActorBId] = useState()

	// once we are able to get the credits i thought it would be cool to throw that into state

	const [actorACredits, setActorACredits] = useState([])


    // set up an environment variable if ya want for api key 


	// the search URLS are the initial api calls -- taking the user input that lives in state under actorA and B
	const searchUrlActorA = `https://api.themoviedb.org/3/search/person?api_key=${REACT_APP_KEY}&language=en-US&query=${userInputActorA}`

	const searchUrlActorB = `https://api.themoviedb.org/3/search/person?api_key=${REACT_APP_KEY}&language=en-US&query=${userInputActorB}`

	// I've hard coded tom cruise lol to test this search
	const tomCruiseCreditsCall = `https://api.themoviedb.org/3/person/500/combined_credits?api_key=${REACT_APP_KEY}`

	// actorA theoretically should be the id of the actor searched in the first search box -- havent gotten this far yet
	const actorACreditsCall = `https://api.themoviedb.org/3/person/${actorAId}/combined_credits?api_key=${REACT_APP_KEY}`

	const actorBCreditsCall = `https://api.themoviedb.org/3/person/${actorBId}/combined_credits?api_key=${REACT_APP_KEY}`


	// getUserSearch is the funciton attached to the button right now 

	async function getUserSearch() {

		await Axios(searchUrlActorA)
			.then((data) => {
				// console.log(data.data.subclasses[0].name)
				
				setData(data.data.results)
				console.log(data)
				console.log(actorAId)
				setActorAId(data.data.results[0].id)
				// console.log(data.data.results[0].id)
			})
			.catch(console.error)

		await Axios(searchUrlActorB)
			.then((data) => {
				// console.log(data.data.subclasses[0].name)
				
				setData(data.data.results)
				console.log(data)
				console.log(actorBId)
				setActorBId(data.data.results[0].id)
			})
			.catch(console.error)

			
			
			getActorData()
			
		}
		
		const getActorData = () => {
				
				Axios(actorACreditsCall).then((data) => {
					console.log(data)
				})
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


        // here i was trying to set up a catch, when i do the api call for the search, we get actor A, but putting the two sets of api calls in the same funciton gives you an error / undefined for actor ID . so i was trying to make it so, if there is an actor id, load this data 
		if (actorAId) {
			getActorData()
		}
	}

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

export default ApiTesting
