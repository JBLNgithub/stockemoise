import {useState, useEffect} from 'react'
import getAllLocalities from '../../api/localities/getAll'


const KnownLocalityInput = ({style, knownLocalityState}) => {
  const [knownLocality, setKnownLocality] = knownLocalityState
  const [localities, setLocalities] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      const fetchLocalities = async() => {
      	const {data} = await getAllLocalities()
      	setLocalities(data)
        setKnownLocality(data[0].codePostal)
        setIsLoading(false)
      }

      fetchLocalities()
    }, [])

  return (
    <>
      {!isLoading && <>
        <label htmlFor='locality'>Localité*</label>
        <br />
        <select className={style} name='locality' required onChange={(e) => setKnownLocality(e.target.value)}>
        {localities.map((l) => <option value={l.codePostal} key={l.codePostal}>{`${l.codePostal} ${l.city}`}</option>)}
        </select>
        <br className='mb-4' />
      </>}
    </>
  )
}

export default KnownLocalityInput