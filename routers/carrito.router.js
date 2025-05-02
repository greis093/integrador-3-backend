import express from "express";

import carritoController from "../controllers/carrito.controller.js";
// Constantes
const routerCarrito = express.Router();

// ! CRUD Carrito
// CRUD -> R:READ ALL -> GET ALL -> http://localhost:8080/api/v1/carrito
routerCarrito.get("/", carritoController.getAll);
// CRUD -> R:READ ONE -> GET ONE -> http://localhost:8080/api/v1/carrito/id
routerCarrito.get("/:id", carritoController.getOne);

// CRUD -> C:CREATE -> POST -> http://localhost:8080/api/v1/carrito + carritoACrear
routerCarrito.post("/", carritoController.create);

// CRUD -> U:UPDATE -> PUT -> http://localhost:8080/api/v1/carrito/id + carritoAEditar
routerCarrito.put("/:id", carritoController.update);

// CRUD -> D:DELETE -> DELETE -> http://localhost:8080/api/v1/carrito/id
routerCarrito.delete("/:id", carritoController.remove);

export default routerCarrito;
