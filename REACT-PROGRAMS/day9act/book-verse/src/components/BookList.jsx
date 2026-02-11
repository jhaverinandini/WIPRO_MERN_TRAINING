import { Link } from "react-router-dom";

function BookList({ books }) {
  return (
    <ul className="book-list">
      {books.map(book => (
        <li key={book.id} className="book-card">
          <Link to={`/book/${book.id}`}>
            {book.title} — <span style={{ color: "#6b7280" }}>{book.author}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BookList;