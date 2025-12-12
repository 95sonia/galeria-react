import './GridGalery.css'
import React, { useState } from 'react';
import { Card } from './Card';
import { Paginacion } from './Paginacion';

export const GridGalery = ({ categoria }) => {
  // Simulación datos
  const fotos = [
    { id: 1, categoria: "playa", url: "#", img: "playa.jpg", alt: "Foto de la playa" },
    { id: 2, categoria: "montaña", url: "#", img: "montaña.jpg", alt: "Foto de la montaña" },
    { id: 3, categoria: "ciudad", url: "#", img: "ciudad.jpg", alt: "Foto de la ciudad" },
    { id: 4, categoria: "playa", url: "#", img: "playa2.jpg", alt: "Otra playa" },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("playa");

  return (

    <>

      <div className='flexCointainer'>
        <h2>{categoria}</h2>

        {fotos.map((foto) => (
          <Card
            key={foto.id}
            img={foto.img}
            alt={foto.alt}
            url={foto.url}
          />
        ))}

      </div>
      <Paginacion />
    </>
  )
}
