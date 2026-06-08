import { useParams, useNavigate } from 'react-router-dom'
import RedirectButton from '../../RedirectButton'
import ActionButton from '../../ActionButton'
import topThePage from '../../../utils/topThePage'
import { toast } from 'react-toastify'
import deleteConcert from '../../../api/concert/delete'
import usePrivateAPI from '../../../hooks/usePrivateAPI'



const SingleConcertControlPanel = () => {
  	const {id} = useParams()
   	const navigate = useNavigate()
    const privateAPI = usePrivateAPI()

    const deleteHandler = async(e) => {
	    e.preventDefault()

	    const deleteConfirmation = window.confirm('Supprimer le concert définitivement ?')

	    let res
	    if(deleteConfirmation) res = (await privateAPI(deleteConcert, {id})).res

	    if (res.ok) {
	      	topThePage()
	       	toast.success('Concert supprimé')
	        navigate('/planning')
	    }
	    else {
	    	toast.error(`ERREUR : ${res.statusText}`)
	    }
	}

    return (
	    <>
			<RedirectButton label='modifier le concert' path={`/concerts/modifier/${id}`} />
			<RedirectButton label="modifier l'image d'en-tête" path={`/concerts/modifier-image/${id}`} />
			<ActionButton label='supprimer le concert' action={deleteHandler} />
	    </>
	)
}

export default SingleConcertControlPanel