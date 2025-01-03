const express = require("express");
const Borrow = require("../models/Borrow");
const Book = require("../models/Book");

const router = express.Router();

router.post("/borrow", async (req, res) => {
  const { username, bookid } = req.body;
  try {
    const book = await Book.findById(bookid);
    if (!book || !book.available) {
      return res.status(400).json({ message: "Book is not available for borrowing" });
    }

    const borrow = new Borrow({ username, bookid });
    await borrow.save();

    book.available = false;
    await book.save();

    res.status(201).json({ message: "Book borrowed successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
