import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addConcert } from '../../controllers/concerts'
import TitleInput from './TitleInput'
import ContentInput from './ContentInput'
import DatetimeInput from './DatetimeInput'
import LocationInput from './LocationInput'
import formatNewConcert from '../../utils/formatNewConcert'


const InputConcert = ({concert}) => {
  const addHandler = async(e) => {
    e.preventDefault()

    const newConcert = formatNewConcert(
      title, 
      content, 
      datetimeEvent, 
      isNewLocationState[0],
      knownLocationState[0],
      newLocationStates[0][0],
      newLocationStates[1][0],
      newLocationStates[2][0],
      newLocationStates[3][0],
      isNewLocalityState[0],
      knownLocalityState[0],
      newLocalityStates[0][0],
      newLocalityStates[1][0],
      newLocalityStates[2][0],
    )
  
    console.log('newConcert :', newConcert )
  
    /* const res = await addConcert(newConcert)
  
    if(res.success) {
      navigate(`/concerts/${res.id}`)
    } */
  }
  
  const setHandler = (e) => {
      e.preventDefault()
      console.log("TODO : modify concert submited")
  }

  const navigate = useNavigate()
  
  // TODO : cover
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [datetimeEvent, setDatetimeEvent] = useState('')
  const isNewLocationState = useState(false)
  const isNewLocalityState = useState(false)
  // known location
  const knownLocationState = useState('')
  // new location : {name :string, street: string, number: integer, additionalAddress: string}
  const newLocationStates = [useState(''), useState(''), useState(''), useState('')]
  // known locality
  const knownLocalityState = useState('')
  // new locality : {code postal : number, city : string, country : string}
  const newLocalityStates = [useState(''), useState(''), useState('')]

  const inputClass = 'bg-blue-400 rounded-sm text-neutral-800 px-2'
    
  return (
    <div className="bg-neutral-800 text-neutral-200 rounded-2xl p-5">
      <h2 className="text-center font-bold text-3xl mb-8">{concert ? 'Modifier le concert' : 'Ajouter un concert'}</h2>

      <form onSubmit={concert ? setHandler : addHandler}>
        <h4 className='text-center mb-4'>L'ajout de l'image d'en-tête arrivera prochainement</h4>

        <TitleInput title={title} setTitle={setTitle} style={inputClass} />
        <ContentInput content={content} setContent={setContent} style={inputClass} />
        <DatetimeInput datetimeEvent={datetimeEvent} setDatetimeEvent={setDatetimeEvent} style={inputClass} />
        <LocationInput knownLocationState={knownLocationState} isNewLocationState={isNewLocationState} newLocationStates={newLocationStates} knownLocalityState={knownLocalityState} isNewLocalityState={isNewLocalityState} newLocalityStates={newLocalityStates} style={inputClass} />

        <input type="submit" className="bg-blue-800 hover:bg-blue-400 hover:text-neutral-800 py-2 px-4 rounded-full" value={concert ? 'Modifier' : 'Ajouter'} />
      </form>
    
  </div>
  )
}



export default InputConcert