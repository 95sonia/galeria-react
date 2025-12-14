// utilzar el hook useEffect
import { createClient } from "pexels";
import { useState, useEffect } from 'react';
const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * Función fecth que conecta con la api de pexels
 * @param {String} categoria capturada en el formulario
 * @returns fotos y cargando
 */

export const useLlamarApi = (categoria, per_page = 10) => {

  const [fotos, setFotos] = useState([]); // hay que almacenar las fotos
  const [cargando, setCargando] = useState(true);  // crear un spiner para verlo mientras se cargan las imagenes
  const [paginaActual, setPaginaActual] = useState(1); // para modificar el estado de la pagina actual, las paginas siempre empiezan en 1 
  const [next_page, setNextPage] = useState(null); // Almacena URL de la pág siguiente. Estado inicial null porque al crgar la app todavía no hay pag siguiente
  const [prev_page, setPrevPage] = useState(null); //Almacena URL pág anterior

  const llamarApi = createClient(API_KEY);
  //console.log(llamarApi)

  const consulta = () => {
    setCargando(true);// Para que aparezca la animación de cargando
    llamarApi.photos // photos es el objeto de pexels
      .search({  // .search es un método para buscar fotos pasandole las queries que necesites
        query: categoria,
        size: "medium",
        page: paginaActual,
        per_page: per_page,
        locale: "es_ES"
      })
      .then((result) => {
        //console.log(result)
        setFotos(result.photos) 
        setNextPage(result.next_page); 
        setPrevPage(result.prev_page); 
        setCargando(false);  // Para eliminar la animación de cargando
      })
      .catch((error) => {
        console.error("Error al consultar API:", error);
        setCargando(false);
      });
  }
  // funcion para cambiar de pagina al hacer click, la llamaremos desde el componente Paginacion
  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1) {
      setPaginaActual(nuevaPagina);
    }
  };

  //useEffect siempre se realiza al final, antes de return. 
  // Aquí se va a disparar la funcion consulta. Queremos que se ejecute useEffect cuando se renderice categoria
  useEffect(() => { // Efecto que se dispara al cambiar la categoría
    setPaginaActual(1); // Reinicia a la pág 1 en una nueva búsqueda
    consulta()
  }, [categoria, per_page]);

  useEffect(() => {// Efecto que se dispara al cambiar la pág actual. No se puede juntar con el de arriba porque da problemas
    consulta();
  }, [paginaActual]);

  return (
    {
      fotos,
      cargando,
      paginaActual,
      next_page,
      prev_page,
      cambiarPagina
    }
  )
}
