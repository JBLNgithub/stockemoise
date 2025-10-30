import {useState, useEffect} from 'react'
import {getLocalities} from '../../controllers/localities'


const KnownLocalityInput = ({style, knownLocalityState}) => {
  const [knownLocality, setKnownLocality] = knownLocalityState
  const [localities, setLocalities] = useState([])

  useEffect(() => {
      const fetchLocalities = async() => {
        const res = await getLocalities()
        setLocalities(res)
        setKnownLocality(res[0].codePostal)
      }
      
      fetchLocalities()
    }, [])

  return (
    <>
      <label htmlFor='locality'>Localité*</label>
      <br />
      <select className={style} name='locality' required onChange={(e) => setKnownLocality(e.target.value)}>
      {localities.map((l) => <option value={l.codePostal} key={l.codePostal}>{`${l.codePostal} ${l.city}`}</option>)}
      </select>
      <br className='mb-4' />
    </>
  )
}

export default KnownLocalityInput