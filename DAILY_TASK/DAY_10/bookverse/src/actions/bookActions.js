import dispatcher from "../dispatcher/dispatcher";

export const addBook = (book) => {
  dispatcher.dispatch({
    type: "ADD_BOOK",
    payload: book,
  });
};
