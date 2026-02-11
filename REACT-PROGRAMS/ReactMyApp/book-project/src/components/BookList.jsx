import { useState } from "react"
import BookCard from "./BookCard"

function BookList() {

  const booksData = [
    { id: 1, title: "Atomic Habits", author: "James Clear", price: 399 },
    { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 299 },
    { id: 3, title: "Think Like a Monk", author: "Jay Shetty", price: 349 }
  ]

  const [search, setSearch] = useState("")
  const [view, setView] = useState("grid")

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      {/* Search box */}
      <input
        type="text"
        placeholder="Search book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Toggle button */}
      <button onClick={() => setView(view === "grid" ? "list" : "grid")}>
        Toggle View
      </button>

      {/* Book list */}
      <div className={view}>
        {filteredBooks.map(book => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
          />
        ))}
      </div>
    </div>
  )
}

export default BookList