const express = require("express");
const Return = require("../models/Return");
const Borrow = require("../models/Borrow");
const Book = require("../models/Book");

const router = express.Router();

router.post("/return", async (req, res) => {
  const { username, bookid } = req.body;
  try {
    const borrowRecord = await Borrow.findOne({ username, bookid });
    if (!borrowRecord) {
      return res.status(404).json({ message: "Borrow record not found" });
    }

    const today = new Date();
    const fine = today > borrowRecord.duedate ? Math.ceil((today - borrowRecord.duedate) / (1000 * 60 * 60 * 24)) * 5 : 0;

    const returnRecord = new Return({
      username,
      bookid,
      duedate: borrowRecord.duedate,
      fine,
    });
    await returnRecord.save();

    const book = await Book.findById(bookid);
    book.available = true;
    await book.save();

    // Delete borrow record
    await Borrow.deleteOne({ username, bookid });

    res.status(201).json({ message: "Book returned successfully", fine });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
