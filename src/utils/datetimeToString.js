import monthNames from "./monthNames"


// format is either 'full' or 'short'
const datetimeToString = (datetime, format='full', withTime=true) => {
    const dt = String(datetime)
    let date, time

    if(dt.includes("T")) {
        [date, time] = dt.split('T')
    }
    else {
        [date, time] = dt.split(' ')
    }

    const [year, month, day] = date.split('-')          // WHY ITS WORKING ??? LIKE I NEED TO STRING TIME BUT NOT DATE ????? WHYYYYYY ??????
    const [hour, minute] = String(time).split(':')

    const dateString = `${day} ${monthNames[parseInt(month)][format]} ${year}${withTime ? ` à ${hour}:${minute}` : ''}`

    return dateString
    // return datetime
}


export default datetimeToString