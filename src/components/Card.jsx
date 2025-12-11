import fotoPrueba from '../assets/viajes-1.jpg'

export const Card = ( {img, descripcion, url}) => {
  return (
    <>
    <article>
      <div>
        <img src={img} alt="Imagen de ejemplo para las cards"></img>
      </div>
      <p>{descripcion}</p>
      <a href={url}>Enlace de fotografía</a>
    </article>
    </>
  )
}

