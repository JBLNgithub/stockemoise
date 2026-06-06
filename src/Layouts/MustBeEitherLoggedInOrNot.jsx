import { Outlet, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { IsLoggedInContext } from '../contexts/controlPanelContexts'
import NotFoundPage from '../pages/NotFoundPage'


const MustBeEitherLoggedInOrNot = ({mustBeLoggedIn}) => {
    const isLoggedIn = useContext(IsLoggedInContext)[0]
    const navigate = useNavigate()

    useEffect(() => {
        if(isLoggedIn !== mustBeLoggedIn) navigate('/')
    }, [])

    return (
        <>
            {isLoggedIn === mustBeLoggedIn
            ? <Outlet />
            : <NotFoundPage />
        }
        </>
    )
}

export default MustBeEitherLoggedInOrNot