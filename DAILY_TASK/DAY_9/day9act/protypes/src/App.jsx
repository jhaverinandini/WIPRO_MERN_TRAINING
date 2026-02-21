import React, { Component } from "react";
import BookList from "./components/BookList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mx-auto">
            📚 BookVerse
          </span>
        </nav>
        <BookList />
      </div>
    );
  }
}

export default App;
