const express = require("express");
require("dotenv").config();
const MongoDBConection = require("../database/conexion");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/products";

    //invocamos nuestros metodos
    this.middleWares();
    this.routes();
    this.MongoDBConect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`El servidor esta corriendo en el puerto ${this.port}`);
      console.log(`ingrear a http://localhost:${this.port}/api/products/ `);
    });
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/products"));
  }

  middleWares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  MongoDBConect() {
    MongoDBConection();
  }
}

module.exports = Server;
