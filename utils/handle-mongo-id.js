const handleMongoId = (elemento) => {
  //elemento -> un documento / un array de documentos
  // elemento -> va a ser un objeto mongoose --> metodos, funciones
  const clave = "_id";
  elemento = JSON.parse(JSON.stringify(elemento)); //convierte un objeto mongoose en un objeto de js
  if (Array.isArray(elemento)) {
    console.log("llego un array de productos");
    for (let i = 0; i < elemento.length; i++) {
      elemento[i].id = elemento[i][clave]; //producto.id=producto._id
      delete elemento[i][clave];
    }
  } else {
    console.log("llego un documento");
    elemento.id = elemento[clave]; //producto.id=producto._id
    delete elemento[clave]; //borro producto._id
  }
  return elemento;
};
export default handleMongoId;
