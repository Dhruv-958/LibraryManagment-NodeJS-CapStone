const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/create", async (req, res) => {
  const { name, author, genre, type } = req.body;
  try {
    const book = new Book({ name, author, genre, type });
    await book.save();
    res.status(201).json({ message: "Book added successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update Book Details
router.post("/update/:id", async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
  
    try {
      const updatedBook = await Book.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
  
      res.status(200).json({ message: "Book updated successfully", updatedBook });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

router.delete('/books/:bookid', async (req, res) => {
  const { bookid } = req.params; 

  try {
    const book = await Book.findByIdAndDelete(bookid);
    
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Unable to delete book', message: err.message });
  }
});

module.exports = router;
