import mongoose from "mongoose";

//! Creamos el esquema
// CarritoModelo -> Es el que me va a permitir interactuar con la base de datos.
const carritoSchema = mongoose.Schema(
  {
    carrito: Array,
  },
  {
    timestamps: true, //createAt/ updatedAt
    versionKey: false,
  }
);

//! A partir del Schema crea el modelo
const CarritoModel = mongoose.model("carritos", carritoSchema);

//--------------------------------------------------------------------
/*Metodos que nos va servir de interfaz para interactuar con la DB*/
//--------------------------------------------------------------------
//! Metodos para interactuar con la DB

const crearCarrito = async (carrito) => {
  try {
    const carritoCreado = new CarritoModel(carrito); //tiene que recibir un obj
    const carritoGuardado = await carritoCreado.save();

    return carritoGuardado;
  } catch (error) {
    throw error;
  }
};

export default {
  crearCarrito,
};
