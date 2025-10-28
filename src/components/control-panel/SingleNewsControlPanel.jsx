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
      
      const res = deleteNews(id)
      
      if (res) {
        topThePage()
        navigate('/actualites')
      }
    }

  return (
    <>
      <RedirectButton label="modifier l'actualité" />
      <ActionButton label="supprimer l'actualité" action={deleteHandler} />
    </>
  )
}

export default SingleNewsControlPanel