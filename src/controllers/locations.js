import {getLocations as getL} from '../dataAcces/fetch/locations'


export const getLocations = async() => {
    return await getL()
}