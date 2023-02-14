const { Router } = require("express");

const {
  productsGET,
  productsPOST,
  productsPUT,
  productsDELETE,
} = require("../controllers/products");

const router = Router();

router.get("/", productsGET);

router.post("/", productsPOST);

router.put("/", productsPUT);

router.delete("/", productsDELETE);

module.exports = router;
