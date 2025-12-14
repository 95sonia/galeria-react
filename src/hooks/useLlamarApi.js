// utilzar el hook useEffect
import { createClient } from "pexels";
import { useState, useEffect } from 'react';
const API_KEY = import.meta.env.VITE_API_KEY;
/**
 * Función fecth que conecta con la api de pexels
 * @param {String} categoria capturada en el formulario
 * @returns fotos y cargando
 */
export const useLlamarApi = (categoria) => {

    // hay que almacenar las fotos
    const [fotos, setFotos] = useState([]);
    // crear un spiner para verlo mientras se cargan las imagenes
    const [cargando, setCargando] = useState(true);
    const llamarApi = createClient(API_KEY);
    //console.log(llamarApi)

    const consulta = () => {
      // Para que aparezca la animación de cargando
        setCargando(true);
        llamarApi.photos // photos es el objeto de pexels
        // .search es un método para buscar fotos pasandole las queries que necesites
        .search({query: categoria, size: "medium", page: 1, per_page: 10, locale: "es_ES"})
        .then((result) => {
            console.log(result)
          setFotos(result.photos)
        });
        // Para eliminar la animación de cargando
        setCargando(false);
    }
    //useEffect siempre se realiza al final, antes de return. 
    // Aquí se va a disparar la funcion consulta. Queremos que se ejecute useEffect cuando se renderice categoria
    useEffect(() => {
        consulta()
    }, [categoria])

  return (
    {fotos,
    cargando}
  )
}
