import getAllConcerts from "../dataAcces/getAllConcertsDA";

function getAllConcertsB(){
    let allConcerts = getAllConcerts()
    let i = 0

    console.log(allConcerts)

    allConcerts.forEach((c) => {
        if(c.cover == '') c.cover = "placeHolder.png"
    })

    return allConcerts
}

export default getAllConcertsB