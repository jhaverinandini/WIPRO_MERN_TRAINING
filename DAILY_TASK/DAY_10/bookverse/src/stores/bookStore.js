import dispatcher from "../dispatcher/dispatcher";

let books = [];
const listeners = [];

const bookStore = {
  getBooks() {
    return books;
  },

  addChangeListener(listener) {
    listeners.push(listener);
  },

  emitChange() {
    listeners.forEach(fn => fn());
  }
};

dispatcher.register(action => {
  if (action.type === "ADD_BOOK") {
    books = [...books, action.payload];
    bookStore.emitChange();
  }
});

export default bookStore;
