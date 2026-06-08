import {createContext, useState} from 'react'


const AuthContext = createContext({})

export function AuthProvider ({children}) {
	const [accessToken, setAccessToken] = useState('')
	const [payload, setPayload] = useState({})

	return(
		<AuthContext.Provider value={{accessToken, setAccessToken, payload, setPayload}}>
			{children}
		</AuthContext.Provider>
	)
}


export default AuthContext