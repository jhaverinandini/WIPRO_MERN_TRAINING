import React, { Component } from "react";

class AuthorInfo extends Component {
  render() {
    const { author, bio, topBooks } = this.props;

    return (
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">{author}</h5>
          <p className="card-text">{bio}</p>
          <h6>Top Books:</h6>
          <ul>
            {topBooks.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AuthorInfo;
