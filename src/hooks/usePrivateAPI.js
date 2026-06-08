import useAuth from "./useAuth"
import refresh from "../api/auth/refresh"


export default function usePrivateAPI() {
	const {accessToken, setAccessToken} = useAuth()

	return async(query, parameters) => {
		const queryResponse = await query(accessToken, parameters)

		if(queryResponse.res.status === 401) {
			const refreshResponse = await refresh()
			if(refreshResponse.res.ok) {
				const newAccessToken = refreshResponse.data.accessToken
				setAccessToken(newAccessToken)
				return query(newAccessToken, parameters)
			}
		}

		return queryResponse
	}
}