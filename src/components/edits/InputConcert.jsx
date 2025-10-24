import {useState} from 'react'

const InputConcert = ({concert}) => {    
    const addConcert = (e) => {
        e.preventDefault()
        console.log("TODO : add concert submited")
    }

    const updateConcert = (e) => {
        e.preventDefault()
        console.log("TODO : modify concert submited")
    }

    // cover
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    // dateEvent
    // location

  return (
    <div className="bg-blue-600 text-neutral-200 rounded-2xl p-5">
      <h2 className="text-center font-bold text-3xl mb-8">{concert ? 'Modifier le concert' : 'Ajouter un concert'}</h2>

      <form onSubmit={addConcert}>
        <h4 className='text-center mb-4'>L'ajout de l'image d'en-tête arrivera prochainement</h4>

        <label htmlFor='title'>Titre</label>
        <br />
        <input className="bg-blue-400 rounded-sm text-neutral-800 px-2" type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <br className='mb-4' />
        
        <label htmlFor='description'>Description</label>
        <br />
        <textarea className="bg-blue-400 rounded-sm text-neutral-800 px-2" type='text' name='description' value={content} onChange={(e) => setContent(e.target.value)} />
        <br className='mb-4' />

        <input type="submit" className="bg-blue-800 hover:bg-blue-400 hover:text-neutral-800 py-2 px-4 rounded-full" value={concert ? 'Modifier' : 'Ajouter'} />
      </form>
      
    </div>
  )
}



export default InputConcert