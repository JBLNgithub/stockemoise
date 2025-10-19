import {getNextConcerts as getNextC, getConcert as getC} from '../dataAcces/fetch/concerts'


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