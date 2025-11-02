const formatNewNews = (title, content, isEvent, datetimeEvent, isNewLocation, knownLocation, locationName, locationStreet, locationNumber, locationAdditionalAddress, isNewLocality, knownLocality, localityCodePostal, localityCity, localityCountry) => {
    const newNews = {
        cover: null,  // TODO
        title,
        content
    }

    if(isEvent) {
        newNews.event = {datetimeEvent}

        if(!isNewLocation) {
            newNews.location = knownLocation
        }
        else {
            newNews.location = {
                name: locationName,
                street: locationStreet,
                number: locationNumber,
                additionalAddress: locationAdditionalAddress
            }
          
            newNews.location.additionalAddress = locationAdditionalAddress === '' ? null : locationAdditionalAddress
    
            if(!isNewLocality) {
               newNews.location.locality = knownLocality
            }
            else {
                newNews.location.locality = {
                    codePostal: localityCodePostal,
                    city: localityCity,
                    country: localityCountry
                }
            }
        }
    }

    // return newNews
    return newNews
}


export default formatNewNews