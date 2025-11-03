import { useParams, useNavigate } from 'react-router-dom'
import RedirectButton from '../RedirectButton'
import ActionButton from '../ActionButton'
import { deleteConcert } from '../../controllers/concerts'
import topThePage from '../../utils/topThePage'
import { toast } from 'react-toastify'


const SingleConcertControlPanel = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const deleteHandler = (e) => {
    e.preventDefault()

    const deleteConfirmation = window.confirm('Supprimer le concert définitivement ?')
    
    let res
    
    if(deleteConfirmation) res = deleteConcert(id)
    
    if (res) {
      topThePage()
      toast.success('Concert supprimé')
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