/**
 * Función que recoge el input del formulario
 * @param {String} categoriaNueva añadir categoria al array de categorias
 * @returns 
 */
export const useFormulario = (categoriaNueva) => {

    // Recoge el valor del input buscado
    const handleRecogerCategoria = (ev) => {
        ev.preventDefault()
        //console.log(ev.target, 'desde formulario')

        // para capturar la categoria hay que poner el name del input.value
        const categoria = ev.target.categoria.value;
        // No hace falta, se envía directamente
        //setCategoria(categoria);
        categoriaNueva(categoria);
    };
  return {
    handleRecogerCategoria
  }
}
