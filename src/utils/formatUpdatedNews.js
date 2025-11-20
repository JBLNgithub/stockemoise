const formatUpdatedNews = async(newsToUpdate, title, content, datetimeEvent, isNewLocation, knownLocation, locationName, locationStreet, locationNumber, locationAdditionalAddress, isNewLocality, knownLocality, localityCodePostal, localityCity, localityCountry) => {
    const updatedNews = {}

    if(newsToUpdate.title != title) updatedNews.title = title
    if(newsToUpdate.content != content) updatedNews.content = content
    if(newsToUpdate.event) {
        if(newsToUpdate.event.dateEvent != datetimeEvent) updatedNews.event = {datetimeEvent}
    
        if(!isNewLocation) {
            if(newsToUpdate.event.locationId != knownLocation) updatedNews.location = knownLocation
        }
        else {
            updatedNews.location = {
            name: locationName,
            street: locationStreet,
            number: locationNumber,
            additionalAddress: locationAdditionalAddress
            }
            
            updatedNews.location.additionalAddress = locationAdditionalAddress === '' ? null : locationAdditionalAddress
    
            if(!isNewLocality) {
                updatedNews.location.locality = knownLocality
            }
            else {
                updatedNews.location.locality = {
                    codePostal: localityCodePostal,
                    city: localityCity,
                    country: localityCountry
                }
            }
        }
    }

    return updatedNews
}


export default formatUpdatedNews