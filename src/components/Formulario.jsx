import './Formulario.css'
import PropTypes from 'prop-types';
import { useFormulario } from '../hooks/useFormulario'

// único objetivo del formulario: capturar el valor del input, la categoría
/**
 * Componente Formulario
 * @param {*} categoriaNueva categorias nuevas a través de formulario  
 * @returns Formulario
 */
export const Formulario = ({ categoriaNueva }) => {
    // No hace falta añadir los estados ya que se lo pasamos directamente a la Galería por categoriaNueva(categoria)
    //const [categoria, setCategoria] = useState('');

    const { handleRecogerCategoria } = useFormulario(categoriaNueva);

    return (
        <>
        <section>
            <p className='tituloBuscador'> Buscador de imágenes</p>
            <form className="formularioBuscador flexContainer" onSubmit={handleRecogerCategoria}>
                <input type="text" id="categoria" name="categoria" required placeholder="Escribe una categoría" />
                <button type="submit" id="botonBuscar">Buscar </button>
            </form>
        </section>
        </>

    )
}

Formulario.defaultProps = {
  categoriaNueva: PropTypes.string
};
