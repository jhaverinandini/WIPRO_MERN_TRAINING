import React, { Component } from "react";
import PropTypes from "prop-types";

class BookCard extends Component {
  componentDidMount() {
    console.log("Book loaded:", this.props.book.title);
  }

  render() {
    const { book, onSelect } = this.props;

    return (
      <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-body">
            <h5>{book.title}</h5>
            <p className="text-muted">{book.author}</p>
            <button
              className="btn btn-primary"
              onClick={() => onSelect(book)}
            >
              View Author
            </button>
          </div>
        </div>
      </div>
    );
  }
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default BookCard;
