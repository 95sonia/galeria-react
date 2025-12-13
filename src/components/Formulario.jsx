// único objetivo del formulario: capturar el valor del input, la categoría
// Pasarle los "argumentos" desde el padre (Galeria), sino no los reconoce el padre
import { useState } from "react";
export const Formulario = ({ categoriaNueva }) => {
    // No hace falta añadir los estados ya que se lo pasamos directamente a la Galería por categoriaNueva(categoria)
    //const [categoria, setCategoria] = useState('');

    // Recoge el valor del input buscado
    const handleRecogerCategoria = (ev) => {
        ev.preventDefault()
        //console.log(ev.target, 'desde formulario')

        // para capturar la categoria hay que poner el name del input.value
        let categoria = ev.target.categoria.value;
        // No hace falta, se envía directamente
        //setCategoria(categoria);
        categoriaNueva(categoria);
    };

    return (
        <>
            <p> Buscador de imágenes</p>
            <form id="formularioBuscador" onSubmit={handleRecogerCategoria}>
                <input type="text" id="categoria" name="categoria" required placeholder="Escribe una categoría" />
                <button type="submit" id="botonBuscar">Buscar </button>
            </form>
        </>

    )
}
