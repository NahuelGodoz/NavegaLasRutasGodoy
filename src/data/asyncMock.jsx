const productos = [
    {
      id: 1,
      nombre: "Impresoras 3D FDM  Extrusión de Material.",
      img: 'https://i.ibb.co/Bgy0zKx/tipo-impresora-3d-fdm.jpg',
      descripcion:"Cuentan con 3 ejes perpendiculares utilizando el eje cartesiano X-Y-Z.Estas impresoras cuentan con una mecánica muy sencilla y se calibran de manera fácil Además, puedes corregir los errores sobre la marcha.",
      precio:15000,
      categoria:"Fsv",
      stock:24,
    },
   
    {
      id: 2,
      nombre: "Impresoras 3D Resina SLA.",
      img: 'https://servitec3d.com/wp-content/uploads/2020/06/tipo-impresora-3d-dlp.jpg',
      descripcion:'Esta tecnología ha permitido la fabricación de impresoras de resina de bajo coste como la Impresora 3D Creality LD-002R que no llegan a darnos la calidad de una SLA pero cumple más que de sobra calidad precio. Es más, diría que para el 80 % de los trabajos es más que suficiente.Z',
      precio:14000,
      categoria:"Resina",
      stock:34,
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
