import './GridGalery.css'
import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { Paginacion } from './Paginacion';
import { useLlamarApi } from '../hooks/useLlamarApi';


export const GridGalery = ({ categoria }) => {

  // "Requerir" lo que nos interesa del Hook
  const { cargando, fotos } = useLlamarApi(categoria);

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
