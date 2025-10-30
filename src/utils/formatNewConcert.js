const formatNewConcert = (title, content, datetimeEvent, isNewLocation, knownLocation, locationName, locationStreet, locationNumber, locationAdditionalAddress, isNewLocality, knownLocality, localityCodePostal, localityCity, localityCountry) => {
    const newConcert = {
      cover: null,  // TODO
      title,
      content,
      datetimeEvent
    }

    if(!isNewLocation) {
      newConcert.location = knownLocation
    }
    else {
      newConcert.location = {
        name: locationName,
        street: locationStreet,
        number: locationNumber,
        additionalAddress: locationAdditionalAddress
      }
      
      newConcert.location.additionalAddress = locationAdditionalAddress === '' ? null : locationAdditionalAddress

      if(!isNewLocality) {
        newConcert.location.locality = knownLocality
      }
      else {
        newConcert.location.locality = {
          codePostal: localityCodePostal,
          city: localityCity,
          country: localityCountry
        }
      }
    }

    return newConcert
}


export default formatNewConcert