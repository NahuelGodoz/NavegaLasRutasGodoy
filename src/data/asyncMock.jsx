const productos = [
    {
      id: 1,
      nombre: "Impresoras 3D FDM  Extrusión de Material.",
     
    },
   
    {
      id: 2,
      nombre: "Impresoras 3D Resina SLA.",
  
    },
  ];
// export default productos;

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};
