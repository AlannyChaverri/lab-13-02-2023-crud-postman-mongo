const { request, response } = require("express");
const Producto = require("../models/products");

const productsGET = async (req = request, res = response) => {
  try {
    const product = await Producto.find();
    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo GET",
      product,
    });

    console.log("metodo GET");
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo GET");
  }
};

const productsPOST = async (req = request, res = response) => {
  try {
    const { nombre, descripcion, precio, fechaAlta, SKU } = req.body;

    const producto = new Producto({
      nombre,
      descripcion,
      precio,
      fechaAlta,
      SKU,
    });

    await producto.save();

    console.log("metodo POST");

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
    const { nombre, descripcion, precio, fechaAlta, SKU } = req.body;
    const filter = {
      _id: id,
    };
    const Updated = {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      fechaAlta: fechaAlta,
      sku: SKU,
    };

    await Producto.updateOne(filter, Updated);
    console.log("metodo PUT");

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
    const filter = { _id: id };
    const product = await Producto.findOneAndDelete(filter);

    console.log("metodo DELETE");
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
