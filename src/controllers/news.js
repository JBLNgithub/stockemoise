import {
    getAllNews as getAllN,
    getNews as getN
} from "../dataAcces/localFiles/news";

export const getAllNews =() => {
    return getAllN()
}

export const getNews = (id) => {
    return getN(id)
}

export default getAllNews