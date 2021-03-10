function App() {
  return (
    <div className="contenedor">
      <span className="mensaje">Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            <li><button>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>5</button></li>
            <li><button>6</button></li>
            <li><button>7</button></li>
            <li><button>8</button></li>
            <li><button>9</button></li>
            <li><button>0</button></li>
            <li><button className="big">borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">667359961</span>
          <a href="llamar" className="llamar">Llamar</a>
          <a href="colgar" className="colgar activo">Colgar</a>
        </div>
      </main>
    </div>
  );
}

export default App;
