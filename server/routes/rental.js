const express = require("express");
const router = express.Router();
const Rental = require("../models/rental");

router.get("/", (req, res) => {
  Rental.find({})
    .then(foundRentals => {
      res.json(foundRentals);
    })
    .catch(err =>
      res
        .status(404)
        .json({
          errors: { title: "Rental Error!", detail: "Could not find Rental" }
        })
    );
});

router.get("/:id", (req, res) => {
  const rentalId = req.params.id;
  Rental.findById(rentalId)
    .then(foundRental => {
      res.json(foundRental);
    })
    .catch(err =>
      res
        .status(404)
        .json({
          errors: { title: "Rental Error!", detail: "Could not find Rental" }
        })
    );
});

module.exports = router;
