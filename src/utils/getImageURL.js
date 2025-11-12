function getImageURL(name) {
    let imgPath

    if(import.meta.env.DEV) {
        imgPath = new URL(`../assets/images/${name ? name : 'placeHolder.png'}`, import.meta.url).href
    }
    else {
        imgPath = `http://localhost:3000/api/uploads/${name}`
    }

    console.log("image requested to :", imgPath)
    return imgPath
}

export default getImageURL;