function getImageURL(name) {
    const loadProd_force = false
    // const default_img = 'placeHolder.png'
    const default_img = 'default-image.jpg'

    let imgPath

    if(!loadProd_force && import.meta.env.DEV) {
        // imgPath = new URL(`../assets/images/${name || default_img}`, import.meta.url).href
        imgPath = `http://localhost:3000/api/uploads/${name || default_img}`
    }
    else {
        imgPath = `https://stockemoise.onrender.com/api/uploads/${name || default_img}`
    }

    console.log("image requested to :", imgPath)    // TODO : remove when tested on prod
    return imgPath
}

export default getImageURL;