const API_KEY = import.meta.env.VITE_API_KEY;
const URL_BASE = `https://api.pexels.com/v1/`;
import { useState } from 'react';


const usellamarApiFecth = async (categoria, per_page, page) => {
    // hay que almacenar las fotos
    const [fotos, setFotos] = useState([]);
        
    // crear un spiner para verlo mientras se cargan las imagenes
    const [cargando, setCargando] = useState(true);

    try {
        const respuesta = await fetch(`${URL_BASE}search?query=${categoria}&per_page=${per_page}&page=${page}`, {
            headers: {
                Authorization: `${API_KEY}`
            }
        });
        //console.log(respuesta);

        if (respuesta.ok) {
            const datos = await respuesta.json();
           // console.log(datos);

            // Cambiar el estado de fotos con el objeto de respuesta de pexels
            setFotos(datos.photos);

            // Cambiar el estado de cargando
            setCargando(false);

            //console.log(fotos);

            return fotos;

        } else {

            setCargando(true);

            console.log(error);
            return respuesta.status(400).json({
                respuesta: "no ok",
                mensaje: "Ha habido un error"
            });
        };

    } catch (error) {
        console.log(error);
        return respuesta.status(500).json({
            respuesta: "no ok",
            mensaje: "Ha habido un error, contacte con el administrador"
        });
    };
};
