import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addConcert } from '../../controllers/concerts'
import TitleInput from './TitleInput'
import ContentInput from './ContentInput'
import DatetimeInput from './DatetimeInput'
import LocationInput from './LocationInput'


const InputConcert = ({concert}) => { 
  const navigate = useNavigate()
  
    const addHandler = async(e) => {
      e.preventDefault()
      
      const newConcert = {
        title,
        content,
        cover: null,
        datetimeEvent,
        location : parseInt(location)
      }

      console.log('newConcert :', newConcert )

      const res = await addConcert(newConcert)

      if(res.success) {
        navigate(`/concerts/${res.id}`)
      }
    }

    const updateConcert = (e) => {
        e.preventDefault()
        console.log("TODO : modify concert submited")
    }

    // cover
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [datetimeEvent, setDatetimeEvent] = useState('')
    const [location, setLocation] = useState(null)
    const inputClass = 'bg-blue-400 rounded-sm text-neutral-800 px-2'

  return (
    <div className="bg-neutral-800 text-neutral-200 rounded-2xl p-5">
      <h2 className="text-center font-bold text-3xl mb-8">{concert ? 'Modifier le concert' : 'Ajouter un concert'}</h2>

      <form onSubmit={concert ? updateConcert : addHandler}>
        <h4 className='text-center mb-4'>L'ajout de l'image d'en-tête arrivera prochainement</h4>

        <TitleInput title={title} setTitle={setTitle} style={inputClass} />
        <ContentInput content={content} setContent={setContent} style={inputClass} />
        <DatetimeInput datetimeEvent={datetimeEvent} setDatetimeEvent={setDatetimeEvent} style={inputClass} />
        <LocationInput location={location} setLocation={setLocation} style={inputClass} />

        <input type="submit" className="bg-blue-800 hover:bg-blue-400 hover:text-neutral-800 py-2 px-4 rounded-full" value={concert ? 'Modifier' : 'Ajouter'} />
      </form>
      
    </div>
  )
}



export default InputConcert