import React from 'react';
import './Paginacion.css';

export const Paginacion = ({ paginaActual, next_page, prev_page, cambiarPagina }) => {

  // Si estamos en la última pag, la  URL de siguiente página es null (Pexels devuelve null si no hay mas resultados)
  //esUltimaPagina es un boleano para saber cuando parar: true si es ultima pag y false si hay mas pags
  const esUltimaPagina = next_page === null;

  const handleAnterior = () => {
    if (paginaActual > 1) {
      cambiarPagina(paginaActual - 1); //solo retrocedemos si hay paginas anteriores
    }
  };

  const handleSiguiente = () => {
    if (!esUltimaPagina) { // solo avanzamos si NO es la última 
      cambiarPagina(paginaActual + 1); 
    }
  };

  return (
    <div className='contenedorPagiancion' >
      <button className='btnpaginas' onClick={handleAnterior}
        // Deshabilitado si estamos en la página 1
        disabled={paginaActual === 1}>  Anterior </button>

      <span className='numeroPagina'> Página {paginaActual} </span>

      <button className='btnpaginas' onClick={handleSiguiente}
        // Deshabilitado si es última página (next_page es null)
        disabled={esUltimaPagina}> Siguiente </button>

    </div>
  )
}
