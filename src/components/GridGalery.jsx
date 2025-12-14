import './GridGalery.css'
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

  // "Requerir" lo que nos interesa del Hook
  //const { cargando, fotos } = useLlamarApi(categoria);

  const per_page = 10;
  const page = 1;
  // "Requerir" lo que nos interesa del Hook
  const { cargando, fotos } = usellamarApiFecth(categoria, per_page, page);
  //console.log(fotos);

  return (

    <>
      {/* Pendiente hacer animación*/}
      <div className='flexCointainer'>
        <h2>{categoria}</h2>
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

      <Paginacion />
    </>
  )
}

GridGalery.defaultProps = {
  categoria: PropTypes.string
};
