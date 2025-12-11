import { Formulario } from './Formulario'
import { GridGalery } from './GridGalery'
import React, { useState } from 'react';

export const Galeria = () => {

    // Hacemos que el valor inicial sea un array vacío
    const[categoria, setCategoria] = useState([]);

    // Reemplazar el estado de la propiedad categoría (añadir al array)
    const handlecambiarCategorias = (categoriaNueva) => {
        setCategoria([
            ... categoria,
            categoriaNueva
        ])
        console.log(categoria)
    }
    
    return (
    <>
        {/*Le pasamos la función que actualiza el estado de la categoría */}
        <Formulario categoriasActualizadas = {handlecambiarCategorias}/>
        <GridGalery/>
    </>
    )
}
