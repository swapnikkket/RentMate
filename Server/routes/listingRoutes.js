const express = require("express");
const {
  createListing,
  getListings,
  updateListing,
  deleteListing,
} = require("../controllers/listingController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/", protect, upload.single("image"), createListing);
router.get("/", getListings);
router.put("/:id", protect, updateListing);
router.delete("/:id", protect, deleteListing);

module.exports = router;
