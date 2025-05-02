import models from "../models/carrito.model.js";
const getAll = async (req, res) => {
  try {
    const carritos = await models.obtenerTodosLosCarritos();
    res.json(carritos);
  } catch (error) {
    res.status(500).json({ mensaje: "Algo fallo, no se pudo encontrar" });
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const carrito = await models.obtenerUnCarrito(id);
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ mensaje: "Algo fallo, no se pudo encontrar" });
  }
};

const create = async (req, res) => {
  const carritoACrear = req.body;
  try {
    const carritoGuardado = await models.crearUnCarrito(carritoACrear);
    res.status(201).json(carritoGuardado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Algo fallo, no se pudo guardar" });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const carritoAEditar = req.body;
  carritoAEditar.id = id;
  try {
    const carritoEditado = await models.editarUnCarrito(carritoAEditar);
    res.json(carritoEditado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Algo fallo, no se pudo editar" });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const carritoEliminado = await models.eliminarCarrito(id);
    res.json(carritoEliminado);
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
