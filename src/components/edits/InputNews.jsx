import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {addNews, addNewsAndEvent, addNewsAndEventtAndLocation, addNewsAndEventAndLocationAndLocality, updateNews} from '../../controllers/news'
import TitleInput from './TitleInput'
import ContentInput from './ContentInput'
import IsEventInput from './IsEventInput'
import formatNewNews from '../../utils/formatNewNews'
import formatUpdatedNews from '../../utils/formatUpdatedNews'
import { toast } from 'react-toastify'


const InputConcert = ({id, newsToUpdate}) => {
  const submitHandler = async(e) => {
    e.preventDefault()

    const res = newsToUpdate ? await sendUpdatedNews(newsToUpdate) : await sendNewNews()

    if(res.success) {
      toast.success(`Actualité ${newsToUpdate ? 'modifiée' : 'ajoutée'}`)
      navigate(`/actualites/${id || res.id}`)
    }
    else {
      // TODO : error message
      toast.error("TODO : error message")
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

    // TODO : remove console log
    console.log('new news :', newNews )

    if(!isEventState[0]) {
      return await addNews(newNews)
    }
    else if(!isNewLocationState[0]) {
      return await addNewsAndEvent(newNews)
    }
    else if(!isNewLocalityState[0]) {
      return await addNewsAndEventtAndLocation(newNews)
    }
    else {
      return await addNewsAndEventAndLocationAndLocality(newNews)
    }
  }

  const sendUpdatedNews = async(newsToUpdate) => {
    if((newsToUpdate.event && !isEventState[0]) || (!newsToUpdate.event && isEventState[0])) {   // XOR
      console.log("can't modify event (non-)existance")
      // TODO : inform user of it
      return {success: false}
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

    // TODO : remove console log
    console.log('updated news :', updatedNews )

    if(!isNewLocationState[0]) {
      return await updateNews(id, updatedNews)
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
  const isEventState = useState(false)
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
    const fetchNews = async() => {
      setTitle(newsToUpdate.title)
      setContent(newsToUpdate.content)
      if(newsToUpdate.event) {
        isEventState[1](true)
        setDatetimeEvent(newsToUpdate.event.dateEvent)    // TODO : make it states to pass as prop
        // make checkbox checked
        knownLocationState[1](newsToUpdate.event.locationId)

      }
      // setDatetimeEvent(singleNews.dateEvent)
      // knownLocationState[1](singleNews.location)
    }
    
    if(newsToUpdate) {
      fetchNews()
    }
    else {
      knownLocationState[1](1)
    }     // TODO : this might fail one day cause it's an hard coded value, if ever the id is not in locations (for exemple the location is deleted) then a desync occurs
  }, [])
    
  return (
    <div className="bg-neutral-800 text-neutral-200 rounded-2xl p-5">
      <h2 className="text-center font-bold text-3xl mb-8">{newsToUpdate ? "Modifier l'actualité" : "Ajouter une actualité"}</h2>

      <form onSubmit={submitHandler}>
        <h4 className='text-center mb-4'>L'ajout de l'image d'en-tête arrivera prochainement</h4>

        <TitleInput title={title} setTitle={setTitle} style={inputClass} />
        <ContentInput content={content} setContent={setContent} style={inputClass} />
        <IsEventInput style={inputClass} isUpdate={newsToUpdate ? true : false} isEventState={isEventState} datetimeEvent={datetimeEvent} setDatetimeEvent={setDatetimeEvent} knownLocationState={knownLocationState} isNewLocationState={isNewLocationState} newLocationStates={newLocationStates} knownLocalityState={knownLocalityState} isNewLocalityState={isNewLocalityState} newLocalityStates={newLocalityStates} />

        <input type="submit" className="bg-blue-800 hover:bg-blue-400 hover:text-neutral-800 py-2 px-4 rounded-full" value={newsToUpdate ? 'Modifier' : 'Ajouter'} />
      </form>
    
  </div>
  )
}



export default InputConcert