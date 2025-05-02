import models from "../models/mensajesconsulta.model.js";
const getAll = async (req, res) => {
  try {
    const mensajesconsulta = await models.obtenerTodosLosMensajes();
    res.json(mensajesconsulta);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Algo fallo, no se pudo encontrar mensajes" });
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const mensajesconsulta = await models.obtenerUnMensaje(id);
    res.json(mensajesconsulta);
  } catch (error) {
    res.status(500).json({ mensaje: "Algo fallo, no se pudo encontrar" });
  }
};

const create = async (req, res) => {
  const mensajeACrear = req.body;
  try {
    const mensajeGuardado = await models.crearUnMensaje(mensajeACrear);
    res.status(201).json(mensajeGuardado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Algo fallo, no se pudo guardar" });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const mensajeAEditar = req.body;
  mensajeAEditar.id = id;
  try {
    const mensajeEditado = await models.editarUnMensaje(mensajeAEditar);
    res.json(mensajeEditado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Algo fallo, no se pudo editar" });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const mensajeEliminado = await models.eliminarMensaje(id);
    res.json(mensajeEliminado);
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
