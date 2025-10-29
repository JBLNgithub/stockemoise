import { useState, useEffect } from "react"
import {getLocations} from '../../controllers/locations'
import IsNewLocationInput from "./IsNewLocationInput"
import KnownLocationInput from "./knownLocationInput"
import NewLocationInput from './NewLocationInput'


const LocationInput = ({style, knownLocationState, knownLocalityState, isNewLocationState, newLocationStates, isNewLocalityState, newLocalityStates}) => {
  const [isNewLocation, setIsNewLocation] = isNewLocationState


    return (
        <>
          <IsNewLocationInput isNewLocationState={isNewLocationState} />
          {isNewLocation
            ? <NewLocationInput newLocationStates={newLocationStates} knownLocalityState={knownLocalityState} isNewLocalityState={isNewLocalityState} newLocalityStates={newLocalityStates} style={style} />
            : <KnownLocationInput style={style} knownLocationState={knownLocationState} />
          }
        </>
    )
}

export default LocationInput