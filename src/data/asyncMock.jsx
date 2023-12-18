const productos = [
    {
            id:1,
            nombre : 'Remera',
            precio: 8500,
            categoria : 'Buzo',
            img:'https://3dtronix.com/wp-content/uploads/2022/02/IMPRESORA-3D-ARTILLERY-X2-3DTRONIX-QUITO-ECUADOR-.jpg'
    },
    {
        id:2,
        nombre : 'Buzo',
        precio: 8500,
        categoria : 'Buzo',
        img : '../assets/logo.png',
        stock : 5 
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}
