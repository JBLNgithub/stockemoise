import {getPlanning as getP} from '../dataAcces/fetch/planning'


export const getPlanning = async() => {
    return await getP()
}