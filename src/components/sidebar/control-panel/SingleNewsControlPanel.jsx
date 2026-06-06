import RedirectButton from '../../RedirectButton'
import ActionButton from '../../ActionButton'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteNews } from '../../../controllers/news'
import topThePage from '../../../utils/topThePage'
import { toast } from 'react-toastify'


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
        toast.success('Actualité supprimée')
        navigate('/actualites')
      }
    }

  return (
    <>
      <RedirectButton label="modifier l'actualité" path={`/actualites/modifier/${id}`} />
      <RedirectButton label="modifier l'image d'en-tête" path={`/actualites/modifier-image/${id}`} />
      <ActionButton label="supprimer l'actualité" action={deleteHandler} />
    </>
  )
}

export default SingleNewsControlPanel