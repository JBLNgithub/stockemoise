import {useState, useEffect} from 'react'
import refresh from '../api/auth/refresh'
import useAuth from '../hooks/useAuth'
import getPayload from '../utils/JWT_getPayload'


export default function PersistantAuth({children}) {
	const [isLoading, setIsLoading] = useState(true)
	const {setAccessToken, setPayload} = useAuth()

	useEffect(() => {
		const verifyRefreshToken = async() => {
			const {res, data} = await refresh()
			if(res.ok) {
				const accessToken = data.accessToken
				setAccessToken(accessToken)
				setPayload(getPayload(accessToken))
			}
			setIsLoading(false)
		}

		verifyRefreshToken()
	}, [])

	return(
		<>
			{isLoading ? <p>loading...</p> : children}
		</>
	)
}