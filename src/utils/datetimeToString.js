import monthNames from "./monthNames"


// format is either 'full' or 'short'
const datetimeToString = (datetime, format='full') => {
    const dt = String(datetime)
    let date, time

    if(dt.includes("T")) {
        [date, time] = dt.split('T')
    }
    else {
        [date, time] = dt.split(' ')
    }

    console.log('date :', date)

    const [year, month, day] = date.split('-')          // WHY ITS WORKING ??? LIKE I NEED TO STRING TIME BUT NOT DATE ????? WHYYYYYY ??????
    const [hour, minute] = String(time).split(':')

    return `${day} ${monthNames[parseInt(month)][format]} ${year} à ${hour}:${minute}`
    // return datetime
}


export default datetimeToString