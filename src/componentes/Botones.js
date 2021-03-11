import PropType from "prop-types";

const BotonLlamarColgar = props => {
  const { llamando, numero, accion } = props;
  return (
    <a href={`${llamando ? "colgar" : "llamar"}`}
      name={`${llamando ? "colgar" : "llamar"}`}
      className={`${llamando ? "colgar activo" : `llamar${numero.length === 9 ? " activo" : ""}`}`}
      onClick={accion}>
      {`${llamando ? "Colgar" : "Llamar"}`}
    </a>
  );
};

BotonLlamarColgar.propType = {
  llamando: PropType.bool.isRequired,
  numero: PropType.string.isRequired,
  llamada: PropType.func.isRequired
};

export default BotonLlamarColgar;
