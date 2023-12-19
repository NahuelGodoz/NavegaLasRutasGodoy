export const productos = [
    {
      id: 1,
      nombre: "Impresoras 3D FDM  Extrusión de Material.",
      precio: 85000,
      categoria: "Remeras",
      stock: 1,
      descripcion:
        "Este proceso se desarrolla en un motor que empuja el filamento de plástico, el cual pasa por una boquilla previamente calentada, lo derrite y lo deposita sobre la cama o base de la impresora, en las coordenadas que le hemos indicado.",
      img: src="https://i.ibb.co/gmpz5hy/maquina-Chica.jpg",
    },
   
    {
      id: 2,
      nombre: "Impresoras 3D Resina SLA.",
      precio: 149000,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "Funcionan con un tanque de resina para imprimir en 3D foto polimérica y un rayo láser UV que recorre la forma de la capa y va solidificando la resina dando forma a la pieza capa a capa.",
      img: "https://servitec3d.com/wp-content/uploads/2020/06/tipo-impresora-3d-dlp.jpg",
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
