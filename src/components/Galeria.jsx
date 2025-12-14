import { useState } from 'react';
import { Formulario } from './Formulario';
import { GridGalery } from './GridGalery';


export const Galeria = () => {

    //const categoriasPruebas = ['naturaleza', 'animales', 'casa'];

    // Hacemos que el valor inicial sea un array vacío
    const [categoriasArray, setCategoriasArray] = useState([]);

    // Reemplazar el estado del array con las categorías del Formulario
    const categoriaNueva = (categoria) => {
        //console.log(categoria, 'valor recibido en Galería') // Para comprobar que se está recibiendo desde Formulario
        
        // Perfilar palabras para después filtrar
        const categoriaRefinada = categoria.trim().toLowerCase();
        //console.log(categoriaRefinada);
        
        // Comprobar si existe la palabra buscada, si existe no actualizar el array / si no existe añadirla al array
        if (categoriasArray.includes(categoriaRefinada)) {
            
            return categoriasArray;

        } else {
            //para actualizar el esatado de categoria
            setCategoriasArray([
                ...categoriasArray,
                categoriaRefinada
            ]);
        }
        //console.log(categoriasArray);
    }

    return (
        <>
            {/*Le pasamos la función que actualiza el estado de la categoría */}
            <Formulario categoriaNueva={categoriaNueva} />

            {/* Recorrer el array para después poder pintar las fotos en las Cards*/}
            {categoriasArray.map((categoriaArray) => (
        
                <GridGalery 
                    key={categoriaArray}
                    categoria={categoriaArray}
                />
            ))}
        </>
    )
}
