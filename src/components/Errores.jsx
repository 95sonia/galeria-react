import PropTypes from 'prop-types';
/**
 * Componente que muestra los errores
 */
export const Errores = ({ mensaje }) => {
    // Si no hay error, no mostrar nada
    if (!mensaje) {
        return null;
    }
  return (
    <div className= "errores">
      <p>{mensaje}</p>
    </div>
  )
}

Errores.defaultProps = {
  mensaje: PropTypes.string
};

