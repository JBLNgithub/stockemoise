import getAllconcerts from "../dataAcces/getAllConcertsDA"

function getConcertC(id) {
    const allConcerts = getAllconcerts()
    let seekedConcert

    allConcerts.forEach((c) => {
        if(c.id == id) seekedConcert = c
    })

    if(seekedConcert.cover == '') c.cover = "placeHolder.png"

    return seekedConcert
}

export default getConcertC