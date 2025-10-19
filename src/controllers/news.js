import {
    getAllNews as getAllN,
    getNews as getN
} from "../dataAcces/localFiles/news";

import {getAllNews, getNextNews as getNextN} from '../dataAcces/fetch/news'

export const getRecentNews = async() => {
    return await getAllNews()
}

export const getNextNews = async() => {
    return await getNextN()
}

export const getAllNewsDeprecated =() => {
    return getAllN()
}

export const getNews = (id) => {
    return getN(id)
}

export default getAllNewsDeprecated