//Necesitamos recuperar un Schema y un modelo de Moongose
const { Schema, model } = require("mongoose");

const SchemaProduct = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es un campo requerido"],
  },

  descripcion: {
    type: String,
    required: [true, "El descripcion es un campo requerido"],
  },

  precio: {
    type: String,
    required: [true, "El precio es un campo requerido"],
  },

  fechaAlta: {
    type: String,
    required: [true, "El fechaAlta es un campo requerido"],
  },

  SKU: {
    type: String,
    required: [true, "El SKU es un campo requerido"],
  },
});

SchemaProduct.methods.toJSON = function () {
  const { __v, password, ...product } = this.toObject();
  return product;
};
module.exports = model("product", SchemaProduct);
