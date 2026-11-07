
function CarritoPanel({ carrito, onQuitar, onVaciar }) {
  const total = carrito.reduce(
    (acumulado, producto) => acumulado + producto.price,
    0
  );

  return (
    <aside className="carrito">
      <h2>🛒 Mi carrito ({carrito.length})</h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div className="carrito-item" key={producto.id}>
              <div>
                <strong>{producto.title}</strong>
                <p>$ {producto.price.toFixed(2)}</p>
              </div>

              <button
                className="btn-quitar"
                onClick={() => onQuitar(producto.id)}
              >
                Quitar
              </button>
            </div>
          ))}

          <button
            className="btn-vaciar"
            onClick={onVaciar}
          >
            Vaciar carrito
          </button>
        </>
      )}

      <div className="total">
        <h3>Total: $ {total.toFixed(2)}</h3>
      </div>
    </aside>
  );
}

export default CarritoPanel;
