import {
    getAllNews as getAllNDep,
    getNews as getN
} from "../dataAcces/localFiles/news";

import {getAllNews as getAllN, getNextNews as getNextN} from '../dataAcces/fetch/news'


export const getAllNews = async() => {
    return await getAllN()
}

export const getRecentNews = async() => {
    return await getAllN(2)
}

export const getNextNews = async() => {
    return await getNextN()
}

export const getAllNewsDeprecated =() => {
    return getAllNDep()
}

export const getNews = (id) => {
    return getN(id)
}

export default getAllNewsDeprecated