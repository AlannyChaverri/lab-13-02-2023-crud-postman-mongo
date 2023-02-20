const { Router } = require("express");
const { check } = require("express-validator");
const { validate_fields } = require("../middleware/validate-fields");
const { db_ExistSku } = require("../helpers/db_validates");

const {
  productsGET,
  productsPOST,
  productsPUT,
  productsDELETE,
} = require("../controllers/products");

const router = Router();

router.get("/", productsGET);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("descripcion", "La descripcion es obligatorio").not().isEmpty(),
    check("precio", "El precio es obligatorio").not().isEmpty(),
    check("fechaAlta", "La fechaAlta es obligatorio").not().isEmpty(),
    check("SKU", "El SKU es obligatorio").not().isEmpty(),
    check("SKU").custom((SKU) => db_ExistSku(SKU)),
    validate_fields,
  ],
  productsPOST
);

router.put("/:id", productsPUT);

router.delete("/:id", productsDELETE);

module.exports = router;
