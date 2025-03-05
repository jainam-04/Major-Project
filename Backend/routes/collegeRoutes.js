const express = require("express");
const { getAllColleges, filterColleges } = require("../Controllers/collegeController");

const router = express.Router();

// Routes

router.get("/all", getAllColleges);
router.get("/filter", filterColleges);

module.exports = router;
