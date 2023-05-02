const express = require("express");

const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getUserDetailsAdmin,
  getallUsers,
  updateUserByAdmin,
  deleteUserByAdmin,
} = require("../controllers/userController");
const {
  isAuthenticatedUser,
  isAuthenticatedRoles,
} = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

// Admin Routes

router
  .route("/admin/users")
  .get(isAuthenticatedUser, isAuthenticatedRoles("admin"), getallUsers);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, isAuthenticatedRoles("admin"), getUserDetailsAdmin)
  .put(isAuthenticatedUser, isAuthenticatedRoles("admin"), updateUserByAdmin)
  .delete(
    isAuthenticatedUser,
    isAuthenticatedRoles("admin"),
    deleteUserByAdmin
  );

module.exports = router;
