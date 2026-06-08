import { Outlet, Navigate } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import useAuth from '../hooks/useAuth'


const MustBeEitherLoggedInOrNot = ({mustBeLoggedIn}) => {
	const {auth} = useAuth()

    return (
    	<>
     		{mustBeLoggedIn
       			? auth.accessToken
          			? <Outlet />
             		: <NotFoundPage />
                : auth.accessToken
                	? <Navigate to='/' />
                 	: <Outlet />
       		}
     	</>
    )
}

export default MustBeEitherLoggedInOrNot