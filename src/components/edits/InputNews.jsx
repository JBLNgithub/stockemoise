import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import TitleInput from './TitleInput'
import ContentInput from './ContentInput'
import IsEventInput from './IsEventInput'
import formatNewNews from '../../utils/formatNewNews'
import formatUpdatedNews from '../../utils/formatUpdatedNews'
import { toast } from 'react-toastify'
import addNews from '../../api/news/add'
import updateNews from '../../api/news/update'
import usePrivateAPI from '../../hooks/usePrivateAPI'


const InputNews = ({id, newsToUpdate}) => {
	const privateAPI = usePrivateAPI()

	const submitHandler = async(e) => {
		e.preventDefault()

		const {res, data} = id ? await sendUpdatedNews(newsToUpdate) : await sendNewNews()

		if(res.ok) {
		    toast.success(`Actualité ${id ? 'modifiée' : 'ajoutée'}`)
		    navigate(`/actualites/${id || data?.id}`)
		}
		else {
		    toast.error(`ERREUR : ${data?.message}`)
		}
	}

	const sendNewNews = async() => {
		const newNews = formatNewNews(
		    title,
		    content,
		    isEventState[0],
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

		if(!isEventState[0]) {
		    return await privateAPI(addNews, {news: newNews})
		}
		else if(!isNewLocationState[0]) {
		    return await privateAPI(addNews, {news: newNews, mode: 'event'})
		}
		else if(!isNewLocalityState[0]) {
		    return await privateAPI(addNews, {news: newNews, mode: 'location'})
		}
		else {
		    return await privateAPI(addNews, {news: newNews, mode: 'locality'})
		}
	}

	const sendUpdatedNews = async(newsToUpdate) => {
		if((newsToUpdate.event === isEventState[0]) || (!newsToUpdate.event && isEventState[0])) {   // XOR
			// TODO
			toast.error("Il n'est pas possible de modfier le type d'évènement pour le moment.")
		    return {res:{ok: false}}
		}

		const updatedNews = await formatUpdatedNews(
		    newsToUpdate,
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
			return await privateAPI(updateNews, {id, news: updatedNews})
		}
		else if(!isNewLocalityState[0]) {
		    // TODO
		    toast.error("Il n'est pas possible pour le moment d'ajouter un nouveau lieu en même temps que la modification d'un concert.")
			return {res:{ok: false}}
		}
		else {
		    // TODO
		    toast.error("Il n'est pas possible pour le moment d'ajouter un nouveau lieu en même temps que la modification d'un concert.")
			return {res:{ok: false}}
		}
	}

	const navigate = useNavigate()

	// TODO : cover
	const [title, setTitle] = useState(newsToUpdate?.title || '')
	const [content, setContent] = useState(newsToUpdate?.content || '')
	const [datetimeEvent, setDatetimeEvent] = useState(newsToUpdate?.event?.dateEvent || '')
	const isEventState = useState(newsToUpdate?.event ? true : false)
	const isNewLocationState = useState(false)
	const isNewLocalityState = useState(false)
	// known location
	const knownLocationState = useState(newsToUpdate?.event?.locationId || 1)     // 1 is an hard coded id of a location, carefull if it's ever deleted from locations
	// new location : {name :string, street: string, number: integer, additionalAddress: string}
	const newLocationStates = [useState(''), useState(''), useState(''), useState('')]
	// known locality
	const knownLocalityState = useState('')
	// new locality : {code postal : number, city : string, country : string}
	const newLocalityStates = [useState(''), useState(''), useState('')]

	const inputClass = 'bg-blue-400 rounded-sm text-neutral-800 px-2 w-full'

	return (
		<div className="bg-neutral-800 text-neutral-200 rounded-2xl p-5">
		    <h2 className="text-center font-bold text-3xl mb-8">{newsToUpdate ? "Modifier l'actualité" : "Ajouter une actualité"}</h2>

		    <form onSubmit={submitHandler}>
			    <TitleInput title={title} setTitle={setTitle} style={inputClass} />
			    <ContentInput content={content} setContent={setContent} style={inputClass} />
			    <IsEventInput style={inputClass} isUpdate={newsToUpdate ? true : false} isEventState={isEventState} datetimeEvent={datetimeEvent} setDatetimeEvent={setDatetimeEvent} knownLocationState={knownLocationState} isNewLocationState={isNewLocationState} newLocationStates={newLocationStates} knownLocalityState={knownLocalityState} isNewLocalityState={isNewLocalityState} newLocalityStates={newLocalityStates} />

			    <input type="submit" className="bg-blue-800 hover:bg-blue-400 hover:text-neutral-800 py-2 px-4 rounded-full" value={newsToUpdate ? 'Modifier' : 'Ajouter'} />
		    </form>
		</div>
	)
}


export default InputNews