export const productos = [
    {
      id: 1,
      nombre: "Remera Rick",
      precio: 8500,
      categoria: "Remeras",
      stock: 5,
      descripcion:
        "Las remeras son 100% algodón peinado 24/1 (Premium).No se deforman, ni pierden el color.",
      img: "https://http2.mlstatic.com/D_NQ_NP_751255-MLA31037228606_062019-O.webp",
    },
   
    {
      id: 5,
      nombre: "Zapatillas De Lona Pintadas A Mano Rick And Morty",
      precio: 14900,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "Zapatilla de lona reforzada. Pintada a mano con pintura de calidad.",
      img: "https://http2.mlstatic.com/D_NQ_NP_958920-MLA53230449583_012023-O.webp",
    },
  ];
export default productos;

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productoFiltrado = productos.find(
        (prod) => prod.id === parseInt(id)
      );
      resolve(productoFiltrado);
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter(
        (prod) => prod.categoria === category
      );
      resolve(productosFiltrados);
    }, 2000);
  });
};