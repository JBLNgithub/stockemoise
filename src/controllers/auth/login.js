import query from '../../dataAcces/fetch/auth/login'


export default async function login(email, password) {
    try {
        const res = await query(email, password)
        console.log('controller ', res)
        return res
    }
    catch(err) {
        console.log('error loggin', err)
    }
}