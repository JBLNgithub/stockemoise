import {
    getAllConcerts as getAllC,
    getConcert as getC
} from "../dataAcces/localFiles/concerts";

import {getNextConcerts as getNextC} from '../dataAcces/fetch/concerts'

export const getNextConcerts = async() => {
    return await getNextC()
}

function getAllConcerts() {
    const allConcerts = getAllC()

    return allConcerts
}

export const getConcert = (id) => {
    return getC(id)
}

export default getAllConcerts