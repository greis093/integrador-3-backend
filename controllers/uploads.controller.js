const uploadImagen = (req, res) => {
  const imagen = req.file;
  console.log("imagen: ", imagen);

  if (!imagen) {
    return res.status(400).json({
      mensaje: "No se cargó la imagen necesaria",
    });
  }
  //console.log(req.protocol)// http o https
  //console.log(req.get('host'))// localhost:8080
  //console.log(imagen.filename)//nombre del archivo
  console.log("req.protocol: ", req.protocol);
  console.log("host", req.get("host"));

  console.log("imagen.filename: ", imagen.filename);

  const urlCompletaBack = `${req.protocol}:// ${req.get("host")}/uploads/${
    imagen.filename
  }`;
  console.log("urlCompletaBack", urlCompletaBack);
  res.status(201).json({
    foto: urlCompletaBack,
  });
};
export default {
  uploadImagen,
};
