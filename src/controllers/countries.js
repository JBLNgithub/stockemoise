import {getCountries as getC} from '../dataAcces/fetch/countries.js'


export const getCountries = async() => {
    const res = await getC()
    return res
}