import { useParams, useNavigate } from 'react-router-dom'
import RedirectButton from '../RedirectButton'
import ActionButton from '../ActionButton'
import { deleteConcert } from '../../controllers/concerts'
import topThePage from '../../utils/topThePage'


const SingleConcertControlPanel = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const deleteHandler = (e) => {
    e.preventDefault()
    
    const res = deleteConcert(id)
    
    if (res) {
      topThePage()
      navigate('/planning')
    }
  }

  return (
    <>
      <RedirectButton label='modifier le concert' path={`/concerts/modifier/${id}`} />
      <ActionButton label='supprimer le concert' action={deleteHandler} />
    </>
  )
}

export default SingleConcertControlPanel