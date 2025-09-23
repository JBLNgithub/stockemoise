function getBaseLinkType(type) {
    switch (type) {
        case '0':
            return `/concerts/`

        case '1':
            return `/actualites/`

        default:
        console.log('something went wrong with base link generation')
    }
}

export default getBaseLinkType;