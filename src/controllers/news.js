import {
    getAllNews as getAllN,
    getNews as getN
} from "../dataAcces/localFiles/news";

import {getAllNews} from '../dataAcces/fetch/news'

export const getRecentNews = async() => {
    return await getAllNews()
}

export const getAllNewsDeprecated =() => {
    return getAllN()
}

export const getNews = (id) => {
    return getN(id)
}

export default getAllNewsDeprecated