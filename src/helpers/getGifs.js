


export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=MBxTperYyq6FFsv086eFtGThPHGccElI`
    const resp = await fetch( url );
    /* Desestructuramos la peticion */
    const {data} = await resp.json();


    /* RECORRE TODO EL OBJETO Y ME DEVUELVE 
    TODAS LAS PROPIEDADES QUE YO LE ESTOY 
    INDICANDO */
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            //Le ponemos el ? para preguntar si existe lo busque 
            url: img.images?.downsized.url
        }
    })
    return gifs; 
      
}