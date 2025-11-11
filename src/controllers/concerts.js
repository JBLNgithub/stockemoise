import {
    getNextConcerts as getNextC, 
    getConcert as getC,
    postConcert,
    postConcertAndLocation,
    postConcertAndLocationAndLocality,
    patchConcert,
    postNewCover,
    deleteConcert as deleteC
} from '../dataAcces/fetch/concerts'


export const getNextConcerts = async() => {
    return await getNextC()
}

export const getConcert = async(id) => {
    try {
        const concert = await getC(id)
        concert.event = {
            dateEvent: concert.dateEvent,
            isCanceled: concert.isCanceled,
            locationName: concert.locationName,
            locationStreet: concert.locationStreet,
            locationNumber: concert.locationNumber,
            locationAdditionalAddress: concert.locationAdditionalAddress,
            locationCodePostal: concert.locationCodePostal,
            locationCity: concert.locationCity,
            locationCountry: concert.locationCountry,
        }
        
        return concert
    }
    catch(err) {
        console.error("TODO : controller.getConcert")
        return null
    }
}

export const addConcert = async(concert) => {
    try {
        const res = await postConcert(concert)
        return res
    }
    catch(err) {
        console.error(err)
        return false
    }
}

export const addConcertAndLocation = async(concert) => {
    try {
        const res = await postConcertAndLocation(concert)
        return res
    }
    catch(err) {
        console.error(err)
        return false
    }
}

export const addConcertAndLocationAndLocality = async(concert) => {
    try {
        const res = await postConcertAndLocationAndLocality(concert)
        return res
    }
    catch(err) {
        console.error(err)
        return false
    }
}

export const setConcert = async(id, concert) => {
    try {
        const res = await patchConcert(id, concert)
        return res
    }
    catch(err) {
        console.error(err)
        return {success: false}
    }
}

export const setNewConcertCover = async(id, formData) => {
    try {
        const res = await postNewCover(id, formData)
        return res
    }
    catch(err) {
        console.error(err)
        return {success: false}
    }
}

export const deleteConcert = async(id) => {
    try {
        await deleteC(id)
        return true
    }
    catch(err) {
        console.error(err)
        return false
    }
}