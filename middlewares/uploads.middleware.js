import multer from "multer";
import storage from "../utils/handleStorage.js";

const uploadsMiddleware = multer({ storage });

export default uploadsMiddleware;
