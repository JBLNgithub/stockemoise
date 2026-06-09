import useAuth from './useAuth'
import login from '../api/auth/login'
import getPayload from '../utils/JWT_getPayload'


export default function useLogin() {
	const {setAccessToken, setPayload} = useAuth()

	return async (email, password) => {
		const {res, data} = await login(email, password)

		if(res.ok) {
			const accessToken = data.accessToken
			const payload = getPayload(accessToken)
			setAccessToken(accessToken)
			setPayload(payload)
		}
		return {res, data}
	}
}