import { useParams, useNavigate } from 'react-router-dom'
import RedirectButton from '../RedirectButton'
import ActionButton from '../ActionButton'
import { deleteConcert } from '../../controllers/concerts'


const SingleConcertControlPanel = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const deleteHandler = (e) => {
    e.preventDefault()
    
    const res = deleteConcert(id)
    
    if (res) {
      navigate('planning')
    }
  }

  return (
    <>
      <RedirectButton label='modifier le concert' />
      <ActionButton label='supprimer le concert' action={deleteHandler} />
    </>
  )
}

export default SingleConcertControlPanel