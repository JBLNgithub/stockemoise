import { Outlet, Navigate } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import useAuth from '../hooks/useAuth'


const MustBeEitherLoggedInOrNot = ({mustBeLoggedIn}) => {
	const {accessToken} = useAuth()

    return (
    	<>
     		{mustBeLoggedIn
       			? accessToken
          			? <Outlet />
             		: <NotFoundPage />
                : accessToken
                	? <Navigate to='/' />
                 	: <Outlet />
       		}
     	</>
    )
}

export default MustBeEitherLoggedInOrNot