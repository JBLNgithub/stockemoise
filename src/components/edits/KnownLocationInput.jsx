import {useState, useEffect} from 'react'
import {getLocations} from '../../controllers/locations'


const KnownLocationInput = ({knownLocationState, style}) => {
  const [knowLocation, setKnownLocation] = knownLocationState
  const [locations, setLocations] = useState([])
      
  useEffect(() => {
    const fetchLocations = async() => {
      const res = await getLocations()
      setLocations(res)
      setKnownLocation(res[0].id)
    }
    
    fetchLocations()
  }, [])

  return (
    <>
      <label htmlFor='location'>Lieu*</label>
      <br />
      <select className={style} name='location' required onChange={(e) => setKnownLocation(e.target.value)}>
      {locations.map((l) => <option value={l.id} key={l.id}>{l.name}</option>)}
      </select>
      <br className='mb-4' />
    </>
  )
}

export default KnownLocationInput