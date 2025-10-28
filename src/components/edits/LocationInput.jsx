import { useState, useEffect } from "react"
import {getLocations} from '../../controllers/locations'
import IsNewLocationInput from "./IsNewLocationInput"
import KnownLocationInput from "./knownLocationInput"
import NewLocationInput from './NewLocationInput'


const LocationInput = ({style, locationState, isNewLocationState, isNewLocalityState}) => {
  const [isNewLocation, setIsNewLocation] = isNewLocationState


    return (
        <>
          <IsNewLocationInput isNewLocationState={isNewLocationState} />
          {isNewLocation
            ? <NewLocationInput isNewLocalityState={isNewLocalityState} />
            : <KnownLocationInput style={style} locationState={locationState} />
          }
        </>
    )
}

export default LocationInput