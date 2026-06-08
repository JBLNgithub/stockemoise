import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import TitleInput from './TitleInput'
import ContentInput from './ContentInput'
import DatetimeInput from './DatetimeInput'
import LocationInput from './LocationInput'
import formatNewConcert from '../../utils/formatNewConcert'
import formatUpdatedConcert from '../../utils/formatUpdatedConcert'
import { toast } from 'react-toastify'
import addConcert from '../../api/concert/add'
import updateConcert from '../../api/concert/update'
import useAuth from '../../hooks/useAuth'


const InputConcert = ({concertId, id, concertToUpdate}) => {
	const {auth, setAuth} = useAuth()
	const {accessToken} = auth

  	const submitHandler = async(e) => {
	    e.preventDefault()

	    const res = id ? await sendUpdatedConcert(id) : await sendNewConcert()

	    if(res.success) {
		    if(res.accessToken){
				const refreshedAuth = auth
		    	refreshedAuth.accessToken = res.accessToken
		   		setAuth(refreshedAuth)
			}
			toast.success(`Concert ${id ? 'modifié' : 'ajouté'}`)
			navigate(`/concerts/${res?.result?.id || id}`)
	    }
	    else {
		   	toast.error(`ERREUR : ${res?.result?.message || res.message}`)
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

		if(!isNewLocationState[0]) {
			return await addConcert(newConcert, accessToken)
		}
		else if(!isNewLocalityState[0]) {
			return await addConcert(newConcert, accessToken, 'location')
		}
		else {
			return await addConcert(newConcert, accessToken, 'locality')
		}
	}

  const sendUpdatedConcert = async(id) => {
    const updatedConcert = await formatUpdatedConcert(
      id,
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

    if(!isNewLocationState[0]) {
      return await updateConcert(id, updatedConcert, accessToken)
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
  const [title, setTitle] = useState(concertToUpdate?.title || '')
  const [content, setContent] = useState(concertToUpdate?.content || '')
  const [datetimeEvent, setDatetimeEvent] = useState(concertToUpdate?.dateEvent || '')
  const isNewLocationState = useState(false)
  const isNewLocalityState = useState(false)
  // known location
  const knownLocationState = useState(concertToUpdate?.location || 1)   // 1 is an hard coded id of a location, carefull if it's ever deleted from locations
  // new location : {name :string, street: string, number: integer, additionalAddress: string}
  const newLocationStates = [useState(''), useState(''), useState(''), useState('')]
  // known locality
  const knownLocalityState = useState('')
  // new locality : {code postal : number, city : string, country : int}
  const newLocalityStates = [useState(''), useState(''), useState(1)]   // 1 is an hard coded id of a location, carefull if it's ever deleted from countries

  const inputClass = 'bg-blue-400 rounded-sm text-neutral-800 px-2 w-full'

  return (
    <div className="bg-neutral-800 text-neutral-200 rounded-2xl px-10 py-5">
      <h2 className="text-center font-bold text-3xl mb-8">{concertId ? 'Modifier le concert' : 'Ajouter un concert'}</h2>

      <form onSubmit={submitHandler}>
        <TitleInput title={title} setTitle={setTitle} style={inputClass} />
        <ContentInput content={content} setContent={setContent} style={inputClass} />
        <DatetimeInput datetimeEvent={datetimeEvent} setDatetimeEvent={setDatetimeEvent} style={inputClass} />
        <LocationInput isUpdate={concertId ? true : false} knownLocationState={knownLocationState} isNewLocationState={isNewLocationState} newLocationStates={newLocationStates} knownLocalityState={knownLocalityState} isNewLocalityState={isNewLocalityState} newLocalityStates={newLocalityStates} style={inputClass} />

        <input type="submit" className="bg-blue-800 hover:bg-blue-400 hover:text-neutral-800 py-2 px-4 rounded-full" value={concertId ? 'Modifier' : 'Ajouter'} />
      </form>
    </div>
  )
}


export default InputConcert