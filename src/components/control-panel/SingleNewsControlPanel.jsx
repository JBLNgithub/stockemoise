import RedirectButton from '../RedirectButton'
import ActionButton from '../ActionButton'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteNews } from '../../controllers/news'
import topThePage from '../../utils/topThePage'


const SingleNewsControlPanel = () => {
  const {id} = useParams()
    const navigate = useNavigate()
  
    const deleteHandler = (e) => {
      e.preventDefault()

      const deleteConfirmation = window.confirm("Supprimer l'actualité définitivement ?")

      let res
      
      if(deleteConfirmation) res = deleteNews(id)
      
      if (res) {
        topThePage()
        navigate('/actualites')
      }
    }

  return (
    <>
      <RedirectButton label="modifier l'actualité" path={`/actualites/modifier/${id}`} />
      <ActionButton label="supprimer l'actualité" action={deleteHandler} />
    </>
  )
}

export default SingleNewsControlPanel