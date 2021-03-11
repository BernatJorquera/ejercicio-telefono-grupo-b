import PropTypes from "prop-types";

const Numero = props => {
  const { numero } = props;
  return (
    <span className="numero">{numero}</span>
  );
};

Numero.propTypes = {
  numero: PropTypes.string.isRequired
};

export default Numero;
