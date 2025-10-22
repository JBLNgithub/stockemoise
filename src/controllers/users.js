import {login as loginDataAccess, isLoggedIn as isLoggedInDataAccess, logout as logoutDataAccess} from '../dataAcces/fetch/users'


export const login = async(email, password) => {
    try {
        const res = await loginDataAccess(email, password)
        console.log('succed loggin')
        console.log(res)
    }
    catch(err) {
        console.log('error loggin', err)
    }
}

export const isLoggedIn = async() => {
    try {
        const res = await isLoggedInDataAccess()
        console.log('succed isLoggedIn')
        console.log(res)
    }
    catch(err) {
        console.log('error isLoggedIn', err)
    }
}

export const logout = async() => {
    try {
        const res = await logoutDataAccess()
        console.log('succed logout')
        console.log(res)
    }
    catch(err) {
        console.log('error logout', err)
    }
}