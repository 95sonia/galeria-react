
import './Card.css'

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

