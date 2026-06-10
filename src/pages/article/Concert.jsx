import {useState, useEffect} from 'react'
import ArticlePage from './Article'
import { useParams } from 'react-router-dom'
import getConcert from '../../api/concerts/get'
import useControlPanel from '../../hooks/useControlPanel'


const Concert = () => {
    const {id} = useParams()
    const [concert, setConcert] = useState({})
    const {setOnConcert} = useControlPanel()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
            const fetchConcert = async() => {
            	const data = (await getConcert(id)).data
             	// TODO : fixe backend data structure
            	data.event = {
	                 dateEvent: data.dateEvent,
	                 isCanceled: data.isCanceled,
	                 locationName: data.locationName,
	                 locationStreet: data.locationStreet,
	                 locationNumber: data.locationNumber,
	                 locationAdditionalAddress: data.locationAdditionalAddress,
	                 locationCodePostal: data.locationCodePostal,
	                 locationCity: data.locationCity,
	                 locationCountry: data.locationCountry,
             	}
                setConcert(data)
                setIsLoading(false)
            }
            setOnConcert(true)
            fetchConcert()
            return () => setOnConcert(false)
        }, [id])

    return (
        <>
            {isLoading
                ? <p>loading...</p>
                : <ArticlePage article={concert} />
            }
        </>
    )
}

export default Concert