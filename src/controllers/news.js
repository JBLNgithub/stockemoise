import {
    getAllNews as getAllN, 
    getNextNews as getNextN, 
    getNews as getN,
    postNews,
    postNewsAndEvent,
    postNewsAndEventAndLocation,
    postNewsAndEventAndLocationAndLocality,
    patchNews,
    postNewCover,
    deleteNews as deleteN
} from '../dataAcces/fetch/news'


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

export const addNews = async(news) => {
    try {
        const res = await postNews(news)
        return res
    }
    catch(err) {
        console.error(err)
        return {success:false}
    }
}

export const addNewsAndEvent = async(news) => {
    try {
        const res = await postNewsAndEvent(news)
        return res
    }
    catch(err) {
        console.error(err)
        return {success:false}
    }
}

export const addNewsAndEventtAndLocation = async(news) => {
    try {
        const res = await postNewsAndEventAndLocation(news)
        return res
    }
    catch(err) {
        console.error(err)
        return false
    }
}

export const addNewsAndEventAndLocationAndLocality = async(news) => {
    try {
        const res = await postNewsAndEventAndLocationAndLocality(news)
        return res
    }
    catch(err) {
        console.error(err)
        return false
    }
}

export const updateNews = async(id, news) => {
    try {
        const res = await patchNews(id, news)
        return res
    }
    catch(err) {
        console.error(err)
        return {success: false}
    }
}

export const setNewNewsCover = async(id, formData) => {
    try {
        const res = await postNewCover(id, formData)
        return res
    }
    catch(err) {
        console.error(err)
        return {success: false}
    }
}

export const deleteNews = async(id) => {
    try {
        await deleteN(id)
        return true
    }
    catch (err) {
        console.error(err)
        return false
    }
}