let allProducts = [];

async function loadProducts() {
  const loading = document.getElementById("loading");
  loading.style.display = "block";

  try {
    const res = await fetch("./products.json");
    if (!res.ok) {
      throw new Error("Fetch failed");
    }

    allProducts = await res.json();
    displayProducts(allProducts);
  } catch (error) {
    document.getElementById("products").innerHTML =
      "<p style='color:red;text-align:center'>Unable to load products</p>";
  } finally {
    loading.style.display = "none";
  }
}

function displayProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <h3>${p.title}</h3>
      <p>₹${p.price}</p>
    `;
    container.appendChild(div);
  });
}

function filterByCategory(category) {
  const filtered = allProducts.filter(p => p.category === category);
  displayProducts(filtered);
}

loadProducts();
