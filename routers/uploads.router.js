import express from "express";
const routerUploads = express.Router();
import controller from "../controllers/uploads.controller.js";
import uploadsMiddleware from "../middlewares/uploads.middleware.js";

/* POST -> request que guardar la imagen en una carpeta. */
routerUploads.post(
  "/",
  uploadsMiddleware.single("imagen"),
  controller.uploadsImagen
);

export default routerUploads;
