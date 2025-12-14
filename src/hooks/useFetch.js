import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL_BASE = "https://api.pexels.com/v1/";

export const usellamarApiFecth = (categoria, per_page = 10) => {

    const [fotos, setFotos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [paginaActual, setPaginaActual] = useState(1);
    const [next_page, setNextPage] = useState(null);
    const [prev_page, setPrevPage] = useState(null);

    const consulta = async () => {
        if (!categoria) return;

        setCargando(true);

        try {
            const respuesta = await fetch(
                `${URL_BASE}search?query=${categoria}&per_page=${per_page}&page=${paginaActual}&locale=es_ES`,
                {
                    headers: {
                        Authorization: API_KEY,
                    },
                }
            );

            if (!respuesta.ok) {
                throw new Error("Error en la petición");
            }

            const datos = await respuesta.json();

            setFotos(datos.photos);
            setNextPage(datos.next_page);
            setPrevPage(datos.prev_page);
            setCargando(false);

        } catch (error) {
            console.error("Error al consultar la API:", error);
            setCargando(false);
        }
    };


    // 1Cuando cambia la categoría → resetear página
    useEffect(() => {
        if (!categoria) return;
        setPaginaActual(1);
    }, [categoria]);

    // 2Cuando cambia página o per_page → consultar API
    useEffect(() => {
        if (!categoria) return;
        consulta();
    }, [paginaActual, per_page]);

    // Cambiar página
    const cambiarPagina = (nuevaPagina) => {
        if (nuevaPagina >= 1) {
            setPaginaActual(nuevaPagina);
        }
    };

    return {
        fotos,
        cargando,
        paginaActual,
        next_page,
        prev_page,
        cambiarPagina,
    };
};





