import {
    getAllNews as getAllN,
    getNews as getN
} from "../dataAcces/news";

export const getAllNews =() => {
    return getAllN()
}

export const getNews = (id) => {
    return getN(id)
}

export default getAllNews