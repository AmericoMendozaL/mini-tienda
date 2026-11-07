
import ProductoCard from "./ProductoCard";

function ProductoList({ productos, carrito, onAgregar }) {
  return (
    <section className="productos">
      <h2>Productos disponibles</h2>

      <div className="productos-grid">
        {productos.map((producto) => {
          const agregado = carrito.some(
            (item) => item.id === producto.id
          );

          return (
            <ProductoCard
              key={producto.id}
              producto={producto}
              agregado={agregado}
              onAgregar={onAgregar}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductoList;
