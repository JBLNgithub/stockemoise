import { useParams } from "react-router-dom"
import InputConcert from "../../components/edits/InputConcert"


const UpdateConcertPage = () => {
  const {id} = useParams()

  return (
    <InputConcert concertId={id} />
  )
}

export default UpdateConcertPage