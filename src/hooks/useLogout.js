import useAuth from './useAuth'
import logout from '../api/auth/logout'


export default function useLogout() {
	const {setAccessToken, setPayload} = useAuth()

	return async () => {
		const res = await logout()

		if(res) {
			setAccessToken('')
			setPayload({})
		}
		return res
	}
}