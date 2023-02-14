const { request, response } = require("express");
const Producto = require("../models/products");

const productsGET = async (req = request, res = response) => {
  try {
    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo GET",
    });
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo GET");
  }
};

const productsPOST = async (req = request, res = response) => {
  try {
    const body = req.body;

    const { nombre, descripcion, precio, fechaAlta, SKU } = req.body;

    const producto = new Producto({
      nombre,
      descripcion,
      precio,
      fechaAlta,
      SKU,
    });

    await producto.save();

    //Retornamos el resultado de la llamada
    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo POST",
      producto,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo POST");
  }
};

const productsPUT = async (req = request, res = response) => {
  try {
    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo PUT",
    });
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo PUT");
  }
};

const productsDELETE = async (req = request, res = response) => {
  try {
    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo DELETE",
    });
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo DELETE");
  }
};

module.exports = {
  productsGET,
  productsPOST,
  productsPUT,
  productsDELETE,
};
