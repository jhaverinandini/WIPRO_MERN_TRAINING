import React, { useEffect, useState } from "react";
import bookStore from "../stores/bookStore";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookStore.getBooks());

    const updateBooks = () => {
      setBooks(bookStore.getBooks());
    };

    bookStore.addChangeListener(updateBooks);
  }, []);

  return (
    <div>
      <h2>📚 Book List</h2>
      {books.length === 0 && <p>No books added yet</p>}

      {books.map((book, index) => (
        <div key={index}>
          <h4>{book.title}</h4>
          <p>{book.author} - ₹{book.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Home;
