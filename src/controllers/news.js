import {getAllNews as getAllN, getNextNews as getNextN, getNews as getN} from '../dataAcces/fetch/news'


export const getAllNews = async() => {
    return await getAllN()
}

export const getRecentNews = async() => {
    return await getAllN(2)
}

export const getNextNews = async() => {
    return await getNextN()
}

export const getNews = async(id) => {
    try {
        return await getN(id)
    }
    catch (err) {
        console.error("TODO : controller.getNews")
        return null
    }
}