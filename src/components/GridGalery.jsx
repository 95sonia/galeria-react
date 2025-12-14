import './GridGalery.css'
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> paginacion
import { Card } from './Card';
import { Paginacion } from './Paginacion';
import { useLlamarApi } from '../hooks/useLlamarApi';
import { usellamarApiFecth } from '../hooks/useFetch'
import PropTypes from 'prop-types';

/**
 * Componente GridGallery
 * @param {String} categoria buscada a través de formulario
 * @returns grid gallery
 */
export const GridGalery = ({ categoria }) => {

  const fotos_per_page = 10; // Definir el per_page para cada gridGalery

  // "Requerir" lo que nos interesa del Hook
<<<<<<< HEAD
  //const { cargando, fotos } = useLlamarApi(categoria);

  const per_page = 10;
  const page = 1;
  // "Requerir" lo que nos interesa del Hook
  const { cargando, fotos } = usellamarApiFecth(categoria, per_page, page);
  //console.log(fotos);
=======
  const { cargando, fotos, paginaActual, next_page, prev_page, cambiarPagina } = useLlamarApi(categoria, fotos_per_page);
>>>>>>> paginacion

  return (

    <>
      {/* Pendiente hacer animación*/}
      <section>

        <h2>{categoria}</h2>

        <div className='flexContainer'>
          {
            cargando
              ? <p>Cargando</p> :
              fotos.map((foto) => (
                <Card
                  key={foto.id}
                  alt={foto.alt}
                  photographer={foto.photographer}
                  src={foto.src.medium}
                  url={foto.url}
                />
              ))
          }
        </div>
      </section>

      <Paginacion
        paginaActual={paginaActual}
        next_page={next_page}
        prev_page={prev_page}
        cambiarPagina={cambiarPagina}
      />
    </>
  )
}

GridGalery.defaultProps = {
  categoria: PropTypes.string
};
