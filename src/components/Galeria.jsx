import './Galeria.css'
import { useState } from 'react';
import { Formulario } from './Formulario';
import { GridGalery } from './GridGalery';

/**
 * Componente Galeria
 * @returns Galeria
 */

export const Galeria = () => {
    const [categoriasArray, setCategoriasArray] = useState([]);
    const [error, setError] = useState(null); // Objeto con errores por categoría

    const categoriaNueva = (categoria) => {
        const categoriaRefinada = categoria.trim().toLowerCase();

        // Si está vacía, no hacemos nada
        if (categoriaRefinada === '') return

        // Si la categoría ya existe, mostramos error
        if (categoriasArray.includes(categoriaRefinada)) {
            setError('La categoría ya se ha buscado')
            return
        }

        // Añadimos la nueva categoría
        setCategoriasArray(prev => [...prev, categoriaRefinada])

        // Limpiamos error
        setError(null)
    }
    return (
        <>
            <Formulario categoriaNueva={categoriaNueva} />

            {error && <p className="error">{error}</p>}

            {categoriasArray.map((categoriaArray) => (
                <GridGalery
                    key={categoriaArray}
                    categoria={categoriaArray}
                    //error={errores[categoriaArray]} // Pasamos el error a GridGalery
                />
            ))}
        </>
    );
};
