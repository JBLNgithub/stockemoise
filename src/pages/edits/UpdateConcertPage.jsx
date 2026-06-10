import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import InputConcert from "../../components/edits/InputConcert"
import getConcert from '../../api/concerts/get'
import NotFoundPage from "../NotFoundPage"


const UpdateConcertPage = () => {
    const {id} = useParams()
    const [concert, setConcert] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        const fetchConcert = async() => {
        	setConcert((await getConcert(id)).data)
            setIsLoading(false)
        }

        fetchConcert()
    }, [id])

    return (
        <>
            {isLoading
                ? <p>loading...</p>
                : concert
                    ? <InputConcert id={id} concertToUpdate={concert} concertId={id} />
                    : <NotFoundPage />}
        </>
    )
}

export default UpdateConcertPage