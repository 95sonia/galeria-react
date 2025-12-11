// Pasarle los "argumentos" desde el padre (Galeria), sino no los reconoce el padre
export const Formulario = ({ categoriasActualizadas }) => {

    // Recoge el valor del input buscador
    const handleRecogerCategoria = (ev) => {
        ev.preventDefault()

        // para capturar la categoria hay que poner el name del input.value
        let categoria = ev.target.categoria.value;
        //console.log(categoria)

        categoriasActualizadas(categoria);
    };

    return (
        <>
            <p> Buscador de imágenes</p>
            <form action="POST" id="formularioBuscador" onSubmit={handleRecogerCategoria}>
                <input type="text" id="categoria" name="categoria" required placeholder="Escribe una categoría" />
                <button type="submit" id="botonBuscar">Buscar </button>
            </form>
        </>

    )
}
