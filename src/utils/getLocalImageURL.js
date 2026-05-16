function getLocalImageURL(name) {
    return new URL(`../assets/images/${name || 'placeHolder.png'}`, import.meta.url).href
}

export default getLocalImageURL;