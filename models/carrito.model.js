import mongoose from "mongoose";

//! Creamos esquema (la descripción de como va a ser el documento Mongo)
// https://mongoosejs.com/docs/guide.html

const CarritoEsquema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  precio_antiguo: {
    type: Number,
    required: true,
  },
  detalles: {
    type: String,
    required: true,
  },
  categoria: {
    type: Array,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  envio: Boolean,
  love: Boolean,
  box: Boolean,
  bouquet: Boolean,
  graduacion: Boolean,
});

//! Creamos el modelo a partir del esquema. Definir la colección donde se van a guardar los documentos
// CarritoModelo -> Es el que me va a permitir interactuar con la base de datos.
const CarritoModelo = mongoose.model("carrito", CarritoEsquema);

//! Metodos para interactuar con la DB

const obtenerTodosLosCarritos = async () => {
  try {
    const carrito = await CarritoModelo.find();
    return carrito;
  } catch (error) {
    throw error;
  }
};

const obtenerUnCarrito = async (id) => {
  try {
    // const carrito = await CarritoModelo.findOne({_id:id})
    const carrito = await CarritoModelo.findById(id);
    return carrito;
  } catch (error) {
    throw error;
  }
};

const crearUnCarrito = async (carritoNuevo) => {
  try {
    const carritoAGuardar = new CarritoModelo(carritoNuevo);
    const carritoGuardardo = await carritoAGuardar.save();
    return carritoGuardardo;
  } catch (error) {
    throw error;
  }
};

const editarUnCarrito = async (carritoAEditar) => {
  try {
    const options = { new: true };
    const carritoEditado = await CarritoModelo.findByIdAndUpdate(
      carritoAEditar.id,
      carritoAEditar,
      options
    );
    return carritoEditado;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const eliminarCarrito = async (id) => {
  try {
    const carritoEliminado = await CarritoModelo.findByIdAndDelete(id);
    return carritoEliminado;
  } catch (error) {
    throw error;
  }
};

export default {
  obtenerTodosLosCarritos,
  obtenerUnCarrito,
  crearUnCarrito,
  editarUnCarrito,
  eliminarCarrito,
};
