
const API_URL = "https://dummyjson.com/products?limit=12";

export async function fetchProductos() {
  const respuesta = await fetch(API_URL);

  if (!respuesta.ok) {
    throw new Error("Error al obtener los productos");
  }

  const data = await respuesta.json();

  return data.products;
}
