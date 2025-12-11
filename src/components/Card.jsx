import fotoPrueba from '../assets/viajes-1.jpg'

export const Card = () => {
  return (
    <>
    <article>
      <div>
        <img src={fotoPrueba} alt="Imagen de ejemplo para las cards"></img>
      </div>
      <p>Descripción de la fotografía de ejemplo</p>
      <a href="URL de ejemplo">Enlace de fotografía de ejemplo</a>
    </article>
    </>
  )
}

