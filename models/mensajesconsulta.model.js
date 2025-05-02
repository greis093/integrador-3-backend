import mongoose from "mongoose";

//! Creamos esquema (la descripción de como va a ser el documento Mongo)
// https://mongoosejs.com/docs/guide.html

const MensajeConsultaEsquema = mongoose.Schema({
  nombre_completo: {
    type: String,
    required: true,
  },
  celular: {
    type: Number,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  },
});
//! Creamos el modelo a partir del esquema. Definir la colección donde se van a guardar los documentos
// ProductoModelo -> Es el que me va a permitir interactuar con la base de datos.
const MensajeConsultaModelo = mongoose.model(
  "mensajeconsulta",
  MensajeConsultaEsquema
);

//! Metodos para interactuar con la DB

const obtenerTodosLosMensajeConsulta = async () => {
  try {
    const mensajeconsulta = await MensajeConsultaModelo.find();
    return mensajeconsulta;
  } catch (error) {
    throw error;
  }
};

const obtenerUnMensajeConsulta = async (id) => {
  try {
    // const mensajeconsulta = await MensajeConsulta.findOne({_id:id})
    const mensajeconsulta = await MensajeConsultaModelo.findById(id);
    return mensajeconsulta;
  } catch (error) {
    throw error;
  }
};

const crearUnMensajeConsulta = async (mensajeconsultaNuevo) => {
  try {
    const mensajeconsultaAGuardar = new MensajeConsultaModelo(
      mensajeconsultaNuevo
    );
    const mensajeconsultaGuardardo = await mensajeconsultaAGuardar.save();
    return mensajeconsultaGuardardo;
  } catch (error) {
    throw error;
  }
};

const editarUnMensajeConsulta = async (mensajeconsultaAEditar) => {
  try {
    const options = { new: true };
    const mensajeconsultaEditado =
      await MensajeConsultaModelo.findByIdAndUpdate(
        mensajeconsultaAEditar.id,
        mensajeconsultaAEditar,
        options
      );
    return mensajeconsultaEditado;
  } catch (error) {
    throw error;
  }
};

const eliminarMensajeConsulta = async (id) => {
  try {
    const mensajeconsultaEliminado =
      await mensajeconsultaModelo.findByIdAndDelete(id);
    return mensajeconsultaEliminado;
  } catch (error) {
    throw error;
  }
};

export default {
  obtenerTodosLosMensajeConsulta,
  obtenerUnMensajeConsulta,
  crearUnMensajeConsulta,
  editarUnMensajeConsulta,
  eliminarMensajeConsulta,
};
