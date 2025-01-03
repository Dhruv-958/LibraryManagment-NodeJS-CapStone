const sampleUsers = [
  {
    name: "John Doe",
    username: "john123",
    password: "password123",
    email: "john.doe@example.com",
    mobile: 9876543210,
    admin: false
  },
  {
    name: "Jane Smith",
    username: "jane_smith",
    password: "password456",
    email: "jane.smith@example.com",
    mobile: 9876543211,
    admin: true
  },
  {
    name: "Alice Johnson",
    username: "alicej",
    password: "password789",
    email: "alice.johnson@example.com",
    mobile: 9876543212,
    admin: false
  },
  {
    name: "Bob Brown",
    username: "bobby",
    password: "mypassword",
    email: "bob.brown@example.com",
    mobile: 9876543213,
    admin: false
  },
  {
    name: "Charlie Williams",
    username: "charlie_w",
    password: "securepass",
    email: "charlie.williams@example.com",
    mobile: 9876543214,
    admin: true
  }
];

const sampleBooks = [
    {
      "name": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "type": "Novel",
      "available": true
    },
    {
      "name": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "type": "Novel",
      "available": true
    },
    {
      "name": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Classic",
      "type": "Novel",
      "available": true
    },
    {
      "name": "Moby Dick",
      "author": "Herman Melville",
      "genre": "Adventure",
      "type": "Novel",
      "available": true
    },
    {
      "name": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Romance",
      "type": "Novel",
      "available": true
    },
    {
      "name": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": "Fiction",
      "type": "Novel",
      "available": true
    },
    {
      "name": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "type": "Novel",
      "available": true
    },
    {
      "name": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "type": "Series",
      "available": true
    },
    {
      "name": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "genre": "Fantasy",
      "type": "Series",
      "available": true
    },
    {
      "name": "The Da Vinci Code",
      "author": "Dan Brown",
      "genre": "Thriller",
      "type": "Novel",
      "available": true
    },
    {
      "name": "The Alchemist",
      "author": "Paulo Coelho",
      "genre": "Philosophy",
      "type": "Novel",
      "available": true
    },
    {
      "name": "The Road",
      "author": "Cormac McCarthy",
      "genre": "Post-Apocalyptic",
      "type": "Novel",
      "available": true
    },
    {
      "name": "Crime and Punishment",
      "author": "Fyodor Dostoevsky",
      "genre": "Classic",
      "type": "Novel",
      "available": true
    },
    {
      "name": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "genre": "Philosophical",
      "type": "Novel",
      "available": true
    },
    {
      "name": "Brave New World",
      "author": "Aldous Huxley",
      "genre": "Dystopian",
      "type": "Novel",
      "available": true
    },
    {
      "name": "War and Peace",
      "author": "Leo Tolstoy",
      "genre": "Historical",
      "type": "Novel",
      "available": true
    },
    {
      "name": "Anna Karenina",
      "author": "Leo Tolstoy",
      "genre": "Romance",
      "type": "Novel",
      "available": true
    },
    {
      "name": "The Brothers Karamazov",
      "author": "Fyodor Dostoevsky",
      "genre": "Philosophical",
      "type": "Novel",
      "available": true
    },
    {
      "name": "Don Quixote",
      "author": "Miguel de Cervantes",
      "genre": "Classic",
      "type": "Novel",
      "available": true
    },
    {
      "name": "The Book Thief",
      "author": "Markus Zusak",
      "genre": "Historical Fiction",
      "type": "Novel",
      "available": true
    }
  ]

module.exports = { sampleBooks, sampleUsers }