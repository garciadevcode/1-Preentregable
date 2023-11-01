import express from "express";
import index_router from "./routers/index.js";
import { __dirname } from "./utils.js";
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "public"));
app.use("/", index_router);
const httpServer = app.listen(PORT, () => {
  console.log(`El servidor inicio desede el Puerto: ${PORT}`);
});
console.log(__dirname);
