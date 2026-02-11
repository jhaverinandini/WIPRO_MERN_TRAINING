import dispatcher from "./dispatcher";

export const loadProducts = (products) => {
  dispatcher.dispatch({
    type: "LOAD_PRODUCTS",
    payload: products,
  });
};

export const deleteProduct = (id) => {
  dispatcher.dispatch({
    type: "DELETE_PRODUCT",
    payload: id,
  });
};