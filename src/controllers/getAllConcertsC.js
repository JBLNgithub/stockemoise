// import getAllConcerts from "../business/getAllConcertsB";
import getAllConcerts from "../dataAcces/getAllConcertsDA";

function getAllConcertsC() {
    let allConcerts = getAllConcerts()
    let i = 0

    allConcerts.forEach((c) => {
        if(c.cover == '') c.cover = "placeHolder.png"
    })

    return allConcerts
}

export default getAllConcertsC