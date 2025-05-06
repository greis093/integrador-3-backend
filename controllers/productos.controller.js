import models from "../models/productos.model.js";
import handleMongoId from "../utils/handle-mongo-id.js";

import fs from "fs/promises";

const getAll = async (req, res) => {
  try {
    const productos = await models.obtenerTodosLosProductos();

    // console.log("llego controlador", productos);
    res.json(handleMongoId(productos));
    return;
  } catch (error) {
    res.status(500).json({ mensaje: "Algo fallo, no se pudo encontrar" });
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const producto = await models.obtenerUnProducto(id);
    res.json(handleMongoId(producto));
  } catch (error) {
    res.status(500).json({ mensaje: "Algo fallo, no se pudo encontrar" });
  }
};

const create = async (req, res) => {
  const productoACrear = req.body;
  try {
    const productoGuardado = await models.crearUnProducto(productoACrear);

    res.status(201).json(handleMongoId(productoGuardado));
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Algo fallo, no se pudo guardar" });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const productoAEditar = req.body;
  //const fotoAEditar= productoAEditar.foto.split("/uploads/");
  productoAEditar.id = id;
  //console.log("producto a editar", productoAEditar);
  try {
    const productoEditado = await models.editarUnProducto(productoAEditar);
    res.json(productoEditado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Algo fallo, no se pudo editar" });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const productoEliminado = await models.eliminarProducto(id);
    //console.log("producto eliminado", productoEliminado);
    const idImagenCompleto = productoEliminado.foto.split("/uploads/");
    const idFoto = idImagenCompleto[1];
    const filePath = `public/uploads/${idFoto}`;
    //console.log("este es filePath", filePath);
    await fs.unlink(filePath);
    res.json(handleMongoId(productoEliminado));
  } catch (error) {
    res.status(500).json({ mensaje: "Algo fallo, no se pudo borrar" });
  }
};
export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
