import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import concertCover from '../../api/concerts/cover.js'
import newsCover from '../../api/news/cover.js'
import usePrivateAPI from '../../hooks/usePrivateAPI.js'


const UpdateCoverPage = ({type}) => {
	const privateAPI = usePrivateAPI()
    const navigate = useNavigate()
    const {id} = useParams()
    let cover

    const submitHandler = async(e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('cover', cover[0])

        let res

        if(type === 'concert') {
            res = (await privateAPI(concertCover, {id, formData})).res
        }
        else {
            res = (await privateAPI(newsCover, {id, formData})).res
        }

        if(res.ok) {
            toast.success("Nouvelle image ajoutée.")
            navigate(`/${type === 'concert' ? 'concerts' : 'actualites'}/${id}`)
        }
        else {
            toast.error(`ERROR ${res.status} : ${res.statusText}`)
        }
    }

    const inputClass = 'bg-blue-400 rounded-sm text-neutral-800 px-2'

    return (
        <div className="bg-neutral-800 text-neutral-200 rounded-2xl p-5">
            <h2 className="text-center font-bold text-3xl mb-8">Modifier l'image d'en-tête</h2>

            <form onSubmit={submitHandler}>
                <label>Image :</label><br className='mb-4' />
                <input className={inputClass} type='file' accept="image/*" onChange={(e) => cover = e.target.files} required /><br className='mb-4' />
                <input type="submit" className="bg-blue-800 hover:bg-blue-400 hover:text-neutral-800 py-2 px-4 rounded-full" value='Envoyer' />
            </form>
        </div>
    )
}

export default UpdateCoverPage