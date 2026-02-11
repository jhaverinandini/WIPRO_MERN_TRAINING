function BookCard({ title, author, price }) {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Price: ₹{price}</p>
    </div>
  )
}

export default BookCard