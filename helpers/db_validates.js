const Producto = require("../models/products");

const db_ExistSku = async (SKU = "") => {
  const existSku = await Producto.findOne({ SKU }).exec();
  if (existSku) {
    console.log("El SKU ya existe");
    throw new Error("El SKU ya existe");
  }
};

module.exports = {
  db_ExistSku,
};
