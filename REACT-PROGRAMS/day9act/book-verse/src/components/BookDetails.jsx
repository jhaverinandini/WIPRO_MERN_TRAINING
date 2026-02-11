import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="book-details fade">
      {!book ? (
        /* Placeholder UI instead of blank screen */
        <>
          <h1>📘 Book Details</h1>
          <p style={{ color: "#6b7280" }}>
            Fetching book information…
          </p>
        </>
      ) : (
        <>
          <h1>{book.title}</h1>
          <h3 style={{ color: "#6b7280" }}>{book.author}</h3>

          <p>
            <strong>About the Author:</strong><br />
            {book.authorInfo}
          </p>

          <p>
            <strong>About the Book:</strong><br />
            {book.bookInfo}
          </p>
        </>
      )}
    </div>
  );
}

export default BookDetails;