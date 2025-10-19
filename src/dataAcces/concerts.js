import allConcerts from '../datas/concerts.json'

export const getAllConcerts = () => {
        let i = 0
    
        allConcerts.forEach((c) => {
            if(c.cover == '') c.cover = "placeHolder.png"
        })
    
        return allConcerts
}

export const getConcert = (id) => {
    let seekedConcert

    allConcerts.forEach((c) => {
        if(c.id == id) seekedConcert = c
    })

    return seekedConcert
}

export const getAllConcertsDeprecated = () => {
    return allConcerts
}


export default getAllConcertsDeprecated