import express from "express";

import mensajesconsultaController from "../controllers/mensajesconsulta.controller.js";
// Constantes
const routerMensajesConsulta = express.Router();

// ! CRUD MensajesConsulta
// CRUD -> R:READ ALL -> GET ALL -> http://localhost:8080/api/v1/mensajesconsulta
routerMensajesConsulta.get("/", mensajesconsultaController.getAll);
// CRUD -> R:READ ONE -> GET ONE -> http://localhost:8080/api/v1/mensajesconsulta/id
routerMensajesConsulta.get("/:id", mensajesconsultaController.getOne);

// CRUD -> C:CREATE -> POST -> http://localhost:8080/api/v1/mensajesconsulta + mensajesconsultaACrear
routerMensajesConsulta.post("/", mensajesconsultaController.create);

// CRUD -> U:UPDATE -> PUT -> http://localhost:8080/api/v1/mensajesconsulta/id + mensajesconsultaAEditar
routerMensajesConsulta.put("/:id", mensajesconsultaController.update);

// CRUD -> D:DELETE -> DELETE -> http://localhost:8080/api/v1/mensajesconsulta/id
routerMensajesConsulta.delete("/:id", mensajesconsultaController.remove);

export default routerMensajesConsulta;
