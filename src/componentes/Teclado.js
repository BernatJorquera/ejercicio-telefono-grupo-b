import PropTypes from "prop-types";

const Teclado = props => {
  const {
    numeroTeclado,
    llamando,
    anyadeDigito,
    borraNumero,
    borraNumeroEntero
  } = props;
  return (<div className="botones">
    <ol className="teclado">
      {
        numeroTeclado.map(numero =>
          <li key={numero}><button disabled={llamando} onClick={() => anyadeDigito(numero)}>{numero}</button></li>
        )
      }
      <li><button disabled={llamando} className="big"
        onClick={borraNumero}
        onMouseDown={borraNumeroEntero}
        onMouseUp={borraNumeroEntero}>borrar</button></li>
    </ol>
  </div>);
};

Teclado.propTypes = {
  numeroTeclado: PropTypes.arrayOf(PropTypes.number).isRequired,
  llamando: PropTypes.bool.isRequired,
  anyadeDigito: PropTypes.func.isRequired,
  borraNumero: PropTypes.func.isRequired,
  borraNumeroEntero: PropTypes.func.isRequired
};

export default Teclado;
