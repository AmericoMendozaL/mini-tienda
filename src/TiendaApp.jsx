
import { useState } from "react";

import { useProductos } from "./hooks/useProductos";

import ProductoList from "./components/ProductoList";
import CarritoPanel from "./components/CarritoPanel";

function TiendaApp() {
  const { productos, cargando, error } = useProductos();

  const [carrito, setCarrito] = useState([]);

  function agregarProducto(producto) {
    setCarrito((actual) => [...actual, producto]);
  }

  function quitarProducto(id) {
    setCarrito((actual) =>
      actual.filter((producto) => producto.id !== id)
    );
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  if (cargando) {
    return <h2 className="mensaje">Cargando...</h2>;
  }

  if (error) {
    return <h2 className="mensaje error">{error}</h2>;
  }

  return (
    <main className="contenedor">
      <h1>🛍️ Mini Tienda</h1>

      <div className="tienda-layout">
        <ProductoList
          productos={productos}
          carrito={carrito}
          onAgregar={agregarProducto}
        />

        <CarritoPanel
          carrito={carrito}
          onQuitar={quitarProducto}
          onVaciar={vaciarCarrito}
        />
      </div>
    </main>
  );
}

export default TiendaApp;
