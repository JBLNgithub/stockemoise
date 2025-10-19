function getImageURL(name) {
    return new URL(`../assets/images/${name ? name : 'placeHolder.png'}`, import.meta.url).href
}

export default getImageURL;