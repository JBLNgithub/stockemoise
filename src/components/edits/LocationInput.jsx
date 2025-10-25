import { useState, useEffect } from "react"
import {getLocations} from '../../controllers/locations'


const LocationInput = ({location, setLocation, style}) => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
          const fetchLocations = async() => {
            setLocations(await getLocations())
          }
    
          fetchLocations()
        }, [])


    return (
        <>
            <label htmlFor='location'>Lieu*</label>
            <br />
            <select className={style} name='location' required onChange={(e) => setLocation(e.target.value)}>
            {locations.map((l) => <option value={l.id} key={l.id}>{l.name}</option>)}
            </select>
           <br className='mb-4' />

           <h4 className='text-center mb-4'>TODO : new location</h4>
        </>
    )
}

export default LocationInput