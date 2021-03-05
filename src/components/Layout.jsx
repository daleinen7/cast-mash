import React from 'react';
import Mashbutton from './MashButton'
import ActorSelect from './ActorSelect'
import ResultCard from './ResultCard'

export default function Layout() {
  return(
    <div>
        <ActorSelect/>
        <ActorSelect/>
		<MashButton/>
		{/* Result Cards go Here Conditionally */}
    </div>
  )
}