import {getLocalities as getL} from '../dataAcces/fetch/localities'


export const getLocalities = async() => {
    return await getL()
}