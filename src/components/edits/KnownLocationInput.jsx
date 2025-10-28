import {useState, useEffect} from 'react'
import {getLocations} from '../../controllers/locations'


const KnownLocationInput = ({style, locationState}) => {
  const [location, setLocation] = locationState
  const [locations, setLocations] = useState([])
      
      useEffect(() => {
        const fetchLocations = async() => {
          const res = await getLocations()
          setLocations(res)
          setLocation(res[0].id)
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
    </>
  )
}

export default KnownLocationInput