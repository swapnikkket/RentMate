const Listing = require("../models/Listing");

exports.createListing = async (req, res) => {
  console.log("REQ.HEADERS:", req.headers["content-type"]);

  console.log("REQ.FILE:", req.file);

  try {
    const { title, description, price } = req.body;

    if (!title || !description || !price || !req.file) {
      return res.status(400).json({ message: "All fields required" });
    }

    const listing = await Listing.create({
      title,
      description,
      price,
      image: req.file.path, // Cloudinary URL
      owner: req.user._id,
    });

    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getListings = async (req, res) => {
  try {
    const listings = await Listing.find().populate("owner", "name email");

    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    // Ownership check
    if (listing.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    listing.title = req.body.title || listing.title;
    listing.description = req.body.description || listing.description;
    listing.price = req.body.price || listing.price;

    const updatedListing = await listing.save();

    res.status(200).json(updatedListing);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    // Ownership check
    if (listing.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await listing.deleteOne();

    res.status(200).json({ message: "Listing deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
