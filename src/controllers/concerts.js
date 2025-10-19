import {
    getAllConcerts as getAllC,
    getConcert as getC
} from "../dataAcces/localFiles/concerts";


function getAllConcerts() {
    const allConcerts = getAllC()

    return allConcerts
}

export const getConcert = (id) => {
    return getC(id)
}

export default getAllConcerts