function getImageURL(name) {
    const loadProd_force = false
    
    const host = !loadProd_force && import.meta.env.DEV ? 'http://localhost:3000/' : 'http://stockemoise.jbln.be/'
    return `${host}api/uploads/${name || 'default-image.jpg'}`
}

export default getImageURL;