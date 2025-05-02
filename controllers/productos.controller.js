import models from "../models/productos.model.js";
const getAll = async (req, res) => {
  try {
    const productos = await models.obtenerTodosLosProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: "Algo fallo, no se pudo encontrar" });
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const producto = await models.obtenerUnProducto(id);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: "Algo fallo, no se pudo encontrar" });
  }
};

const create = async (req, res) => {
  const productoACrear = req.body;
  try {
    const productoGuardado = await models.crearUnProducto(productoACrear);
    res.status(201).json(productoGuardado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Algo fallo, no se pudo guardar" });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const productoAEditar = req.body;
  productoAEditar.id = id;
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
    res.json(productoEliminado);
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
