const router = require("express").Router();
const accountRoutes = require("./account");
// const packageRoutes = require("./package");

// Account routes
router.use("/account", accountRoutes);

// Package routes
// router.use("/package", packageRoutes);

module.exports = router;
