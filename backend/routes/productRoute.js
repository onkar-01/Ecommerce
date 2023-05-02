const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");
const {
  isAuthenticatedUser,
  isAuthenticatedRoles,
} = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/product/new")
  .post(isAuthenticatedUser, isAuthenticatedRoles("admin"), createProduct);

router
  .route("/product/:id")
  .put(isAuthenticatedUser, isAuthenticatedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, isAuthenticatedRoles("admin"), deleteProduct)
  .get(getSingleProduct);

module.exports = router;
