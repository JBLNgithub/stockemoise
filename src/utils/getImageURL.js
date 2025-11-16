function getImageURL(name) {
    const loadProd_force = true
    const default_img = 'placeHolder.png'

    let imgPath

    if(!loadProd_force && import.meta.env.DEV) {
        imgPath = new URL(`../assets/images/${name || default_img}`, import.meta.url).href
    }
    else {
        imgPath = `http://localhost:3000/api/uploads/${name || default_img}`
        // imgPath = `https://stockemoise.onrender.com/api/uploads/${name || default_img}`
    }

    console.log("image requested to :", imgPath)    // TODO : remove when tested on prod
    return imgPath
}

export default getImageURL;