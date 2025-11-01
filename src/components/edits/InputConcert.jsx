import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { addConcert, addConcertAndLocation, addConcertAndLocationAndLocality, getConcert } from '../../controllers/concerts'
import TitleInput from './TitleInput'
import ContentInput from './ContentInput'
import DatetimeInput from './DatetimeInput'
import LocationInput from './LocationInput'
import formatNewConcert from '../../utils/formatNewConcert'
import formatUpdatedConcert from '../../utils/formatUpdatedConcert'


const InputConcert = ({concertId}) => {
  const submitHandler = async(e) => {
    e.preventDefault()

    const res = concertId ? await sendUpdatedConcert(concertId) : await sendNewConcert()

    if(res.success) {
      console.log('successfully added')
      navigate(`/concerts/${res.id}`)
    }
    else {
      console.log('add request failed')
    }
  }
  
  const sendNewConcert = async() => {
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

    if(!isNewLocationState[0]) {
      return await addConcert(newConcert)
    }
    else if(!isNewLocalityState[0]) {
      return await addConcertAndLocation(newConcert)
    }
    else {
      return await addConcertAndLocationAndLocality(newConcert)
    }
  }

  const sendUpdatedConcert = async(concertId) => {
    const updatedConcert = await formatUpdatedConcert(
      concertId,
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

    console.log('updatedConcert :', updatedConcert )

    if(!isNewLocationState[0]) {
      // TODO
      // return await setConcert(newConcert)
      return {success: false}
    }
    else if(!isNewLocalityState[0]) {
      // TODO
      // return await setConcertAddLocation(newConcert)
      alert("il n'est pas possible pour le moment d'ajouter un nouveau lieu en même temps que la modification d'un concert")
      return {success: false}
    }
    else {
      // TODO
      // return await setConcertAddLocationAndLocality(newConcert)
      alert("il n'est pas possible pour le moment d'ajouter un nouveau lieu en même temps que la modification d'un concert")
      return {success: false}
    }

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

  useEffect(() => {
    const fetchConcert = async() => {
      const concert = await getConcert(concertId)

      setTitle(concert.title)
      setContent(concert.content)
      setDatetimeEvent(concert.dateEvent)
      knownLocationState[1](concert.location)
    }
    
    if(concertId) {
      fetchConcert()
    }
    else {
      knownLocationState[1](1)
    }     // this might fail one day cause it's an hard coded value, if ever the id is not in locations (for exemple the location is deleted) then a desync occurs
  }, [])
    
  return (
    <div className="bg-neutral-800 text-neutral-200 rounded-2xl p-5">
      <h2 className="text-center font-bold text-3xl mb-8">{concertId ? 'Modifier le concert' : 'Ajouter un concert'}</h2>

      <form onSubmit={submitHandler}>
        <h4 className='text-center mb-4'>L'ajout de l'image d'en-tête arrivera prochainement</h4>

        <TitleInput title={title} setTitle={setTitle} style={inputClass} />
        <ContentInput content={content} setContent={setContent} style={inputClass} />
        <DatetimeInput datetimeEvent={datetimeEvent} setDatetimeEvent={setDatetimeEvent} style={inputClass} />
        <LocationInput knownLocationState={knownLocationState} isNewLocationState={isNewLocationState} newLocationStates={newLocationStates} knownLocalityState={knownLocalityState} isNewLocalityState={isNewLocalityState} newLocalityStates={newLocalityStates} style={inputClass} />

        <input type="submit" className="bg-blue-800 hover:bg-blue-400 hover:text-neutral-800 py-2 px-4 rounded-full" value={concertId ? 'Modifier' : 'Ajouter'} />
      </form>
    
  </div>
  )
}



export default InputConcert