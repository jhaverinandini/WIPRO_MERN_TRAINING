const BASE_URL = "http://localhost:5000";

// PRODUCTS
export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
};

// CART
export const getCart = async () => {
  const res = await fetch(`${BASE_URL}/cart`);
  return res.json();
};

export const addToCart = async (product) => {
  await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
};

export const removeFromCart = async (id) => {
  await fetch(`${BASE_URL}/cart/${id}`, {
    method: "DELETE",
  });
};