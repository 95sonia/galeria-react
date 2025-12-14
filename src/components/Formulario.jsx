import { useFormulario } from '../hooks/useFormulario'
// único objetivo del formulario: capturar el valor del input, la categoría
export const Formulario = ({ categoriaNueva }) => {
    // No hace falta añadir los estados ya que se lo pasamos directamente a la Galería por categoriaNueva(categoria)
    //const [categoria, setCategoria] = useState('');

    const { handleRecogerCategoria } = useFormulario(categoriaNueva);

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
