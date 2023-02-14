const { request, response } = require("express");
const Producto = require("../models/products");

const productsGET = async (req = request, res = response) => {
  try {
    const fecha = { fechaAlta: "14/02/2023" };

    const product = await Producto.find(fecha);
    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo GET",
      product,
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
    const { id } = req.params;
    const { ...resto } = req.body;

    const Updated = await Producto.findByIdAndUpdate(id, resto);

    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo PUT",
      Updated,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo PUT");
  }
};

const productsDELETE = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const product = await Producto.findOneAndDelete(id);

    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo DELETE",
      product,
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
