import { getConcert } from "../controllers/concerts"


const formatUpdatedConcert = async(concertId, title, content, datetimeEvent, isNewLocation, knownLocation, locationName, locationStreet, locationNumber, locationAdditionalAddress, isNewLocality, knownLocality, localityCodePostal, localityCity, localityCountry) => {
    const concert = await getConcert(concertId)

    const updatedConcert = {}

    
    if(concert.title != title) updatedConcert.title = title
    if(concert.content != content) updatedConcert.content = content
    if(concert.dateEvent != datetimeEvent) updatedConcert.datetimeEvent = datetimeEvent

    if(!isNewLocation) {
      if(concert.location != knownLocation) updatedConcert.location = knownLocation
    }
    else {
      updatedConcert.location = {
        name: locationName,
        street: locationStreet,
        number: locationNumber,
        additionalAddress: locationAdditionalAddress
      }
      
      updatedConcert.location.additionalAddress = locationAdditionalAddress === '' ? null : locationAdditionalAddress

      if(!isNewLocality) {
        updatedConcert.location.locality = knownLocality
      }
      else {
        updatedConcert.location.locality = {
          codePostal: localityCodePostal,
          city: localityCity,
          country: localityCountry
        }
      }
    }

    return updatedConcert
}


export default formatUpdatedConcert