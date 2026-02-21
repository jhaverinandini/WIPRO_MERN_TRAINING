import React, { Component, createRef } from "react";
import books from "../data/books";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";

class BookList extends Component {
  searchRef = createRef();

  state = {
    selectedBook: null
  };

  focusInput = () => {
    this.searchRef.current.focus();
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="mb-3">
          <input
            type="text"
            ref={this.searchRef}
            className="form-control"
            placeholder="Search books..."
          />
          <button
            className="btn btn-secondary mt-2"
            onClick={this.focusInput}
          >
            Focus Search
          </button>
        </div>

        <div className="row">
          {books.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onSelect={(selected) =>
                this.setState({ selectedBook: selected })
              }
            />
          ))}
        </div>

        {this.state.selectedBook && (
          <AuthorInfo
            author={this.state.selectedBook.author}
            bio={this.state.selectedBook.bio}
            topBooks={this.state.selectedBook.topBooks}
          />
        )}
      </div>
    );
  }
}

export default BookList;
