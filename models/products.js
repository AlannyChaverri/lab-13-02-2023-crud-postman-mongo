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
    type: Date,
    required: [true, "El fechaAlta es un campo requerido"],
  },

  SKU: {
    type: String,
    required: [true, "El SKU es un campo requerido"],
  },
});

module.exports = model("product", SchemaProduct);
