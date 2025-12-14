import './GridGalery.css'
import { Card } from './Card';
import { Paginacion } from './Paginacion';
//import { useLlamarApi } from '../hooks/useLlamarApi';
import { usellamarApiFecth } from '../hooks/useFetch'
import PropTypes from 'prop-types';
import { Errores } from './Errores'

/**
 * Componente GridGallery
 * @param {String} categoria buscada a través de formulario
 * @returns grid gallery
 */
export const GridGalery = ({ categoria }) => {

  //const fotos_per_page = 10; // Definir el per_page para cada gridGalery

  // "Requerir" lo que nos interesa del Hook
  const per_page = 10;
  //const paginaActual = 1;
  // "Requerir" lo que nos interesa del Hook
  const { cargando, fotos, next_page, prev_page, paginaActual, cambiarPagina } = usellamarApiFecth(categoria, per_page);
  //console.log(fotos);

  //const { cargando, fotos, paginaActual, next_page, prev_page, cambiarPagina } = useLlamarApi(categoria, fotos_per_page);

  return (

    <>
      {/* Pendiente hacer animación*/}
      <article>

        <h2>{categoria}</h2>

        <div className='flexContainer cardContainer'>
          {
            cargando
              ? <p>Cargando</p>
              : (
                fotos.length > 0

                  ? fotos.map((foto) => (
                    <Card
                      key={foto.id}
                      alt={foto.alt}
                      photographer={foto.photographer}
                      src={foto.src.medium}
                      url={foto.url}
                    />
                  ))
                  : <Errores mensaje="No se encontraron fotografías de esta categoría" />
              )
          }

        </div>
      </article>

      {fotos.length > 0 && !cargando}
      <article>
        <Paginacion
          paginaActual={paginaActual}
          next_page={next_page}
          prev_page={prev_page}
          cambiarPagina={cambiarPagina}
        />
      </article>
    </>
  )
}

GridGalery.defaultProps = {
  categoria: PropTypes.string
};

