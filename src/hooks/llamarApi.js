const API_KEY = import.meta.env.VITE_API_KEY;
const URL_BASE = `https://api.pexels.com/v1/`;
const per_page = 20;


const llamarApi = async (categoria) => {
    try {
        const respuesta = await fetch(`${URL_BASE}search?query=${categoria}&per_page=${per_page}&page=3`, {
            headers: {
                Authorization: `${API_KEY}`
            }
        });

        console.log(respuesta)
        if (respuesta.ok) {
            const datos = await respuesta.json();
            console.log(datos);
            return datos;   
        } else {
            throw "Oh, oh, error"
        }
    } catch (error) {
        //console.log(error)
        throw (error + "Pendiente de gestionar error")
    }
}


