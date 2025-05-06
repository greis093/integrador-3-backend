import mongoose from "mongoose";

//! Creamos esquema (la descripción de como va a ser el documento Mongo)
// https://mongoosejs.com/docs/guide.html
const ProductoEsquema = mongoose.Schema({
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
  envio: Boolean,
  love: Boolean,
  box: Boolean,
  bouquet: Boolean,
  graduacion: Boolean,
});

//! Creamos el modelo a partir del esquema. Definir la colección donde se van a guardar los documentos
// ProductoModelo -> Es el que me va a permitir interactuar con la base de datos.
const ProductoModelo = mongoose.model("productos", ProductoEsquema);

//! Metodos para interactuar con la DB

const obtenerTodosLosProductos = async () => {
  try {
    const productos = await ProductoModelo.find();
    //console.log("son productos", productos);
    return productos;
  } catch (error) {
    throw error;
  }
};

const obtenerUnProducto = async (id) => {
  try {
    // const producto = await ProductoModelo.findOne({_id:id})
    const producto = await ProductoModelo.findById(id);
    return producto;
  } catch (error) {
    throw error;
  }
};

const crearUnProducto = async (productoNuevo) => {
  try {
    const productoAGuardar = new ProductoModelo(productoNuevo);
    productoAGuardar.foto = productoAGuardar.foto.replace(/\s+/g, "");
    console.log("nuevo producto", productoAGuardar);
    const productoGuardardo = await productoAGuardar.save();
    return productoGuardardo;
  } catch (error) {
    throw error;
  }
};

const editarUnProducto = async (productoAEditar) => {
  try {
    const options = { new: true };
    const productoEditado = await ProductoModelo.findByIdAndUpdate(
      productoAEditar.id,
      productoAEditar,
      options
    );
    return productoEditado;
  } catch (error) {
    throw error;
  }
};

const eliminarProducto = async (id) => {
  console.log("lo q elimine", id);
  try {
    const productoEliminado = await ProductoModelo.findByIdAndDelete(id);
    return productoEliminado;
  } catch (error) {
    throw error;
  }
};

export default {
  obtenerTodosLosProductos,
  obtenerUnProducto,
  crearUnProducto,
  editarUnProducto,
  eliminarProducto,
};
