import PropType from "prop-types";

const Mensaje = props => {
  const { llamando, puntitos } = props;
  return (
    <span className={`mensaje${!llamando ? " off" : ""}`}>Llamando{puntitos}</span>
  );
};

Mensaje.propType = {
  llamando: PropType.bool.isRequired,
  puntitos: PropType.string.isRequired
};

export default Mensaje;
