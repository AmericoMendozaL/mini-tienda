
import { useEffect, useState } from "react";
import { fetchProductos } from "../services/fetchProductos";

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarProductos() {
      try {
        setCargando(true);
        setError(null);

        const data = await fetchProductos();
        setProductos(data);
      } catch (err) {
        setError("No se pudieron cargar los productos. Verifica tu conexión a internet.");
      } finally {
        setCargando(false);
      }
    }

    cargarProductos();
  }, []);

  return { productos, cargando, error };
}
