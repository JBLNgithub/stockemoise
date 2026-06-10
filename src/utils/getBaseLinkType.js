function getBaseLinkType(type) {
    switch (type) {
        case '0':
            return `/concerts/`

        case '1':
            return `/actualites/`

        default:
        console.error('Error getBaseLinkType')
        return '/'
    }
}

export default getBaseLinkType;