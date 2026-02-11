import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import withLoader from "../components/LoaderHOC";
import RenderStatus from "../components/RenderStatus";

function Home({ showLoader }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    showLoader(true);

    fetch("http://localhost:3001/books")
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        showLoader(false);
      });
  }, []);

  return (
    <>
      <RenderStatus render={(msg) => <h2>{msg}</h2>} />
      <BookList books={books} />
    </>
  );
}

export default withLoader(Home);