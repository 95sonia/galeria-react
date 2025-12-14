import './Card.css'
import PropTypes from 'prop-types';

/**
 * Componente card
 * @param {Querys} querys que se requieren para pintar la información
 * @returns Card
 */
export const Card = ({ alt, src, photographer, url }) => {
  return (
    <>
      <article className='card'>
        <div>
          <img src={src} alt={alt} />
        </div>
        <p>{alt}</p>
        <p>Fotógrafo: {photographer}</p>
        <a href={url}>Enlace de fotografía</a>
      </article>
    </>
  )
}

Card.defaultProps = {
  alt: PropTypes.string,
  src: PropTypes.string,
  photographer: PropTypes.string,
  url: PropTypes.string
};

