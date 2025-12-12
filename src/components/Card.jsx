import fotoPrueba from '../assets/viajes-1.jpg'
import './Card.css'

export const Card = ({ img, alt, url }) => {
  return (
    <>
      <article className='card'>
        <div>
          <img src={img} alt={alt} />
        </div>
        <p>{alt}</p>
        <a href={url}>Enlace de fotografía</a>
      </article>
    </>
  )
}

