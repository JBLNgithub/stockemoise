import {useState, useEffect} from 'react'
import getAllLocations from '../../api/locations/getAll'


const KnownLocationInput = ({knownLocationState, style}) => {
  const [knownLocation, setKnownLocation] = knownLocationState
  const [locations, setLocations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLocations = async() => {
    setLocations((await getAllLocations()).data)
      setIsLoading(false)
    }

    fetchLocations()
  }, [])

  return (
    <>
      {!isLoading && <>
        <label htmlFor='location'>Lieu*</label>
        <br />
        <select className={style} name='location' required onChange={(e) => setKnownLocation(e.target.value)} value={knownLocation} >
        {locations.map((l) => <option value={l.id} key={l.id}>{l.name}</option>)}
        </select>
        <br className='mb-4' />
      </>}
    </>
  )
}

export default KnownLocationInput