const { Router } = require("express");

const {
  productsGET,
  productsPOST,
  productsPUT,
  productsDELETE,
} = require("../controllers/products");

const router = Router();

// router.get("/", productsGET);
router.get("/:id", productsGET);

router.post("/", productsPOST);

router.put("/:id", productsPUT);

router.delete("/:id", productsDELETE);

module.exports = router;
