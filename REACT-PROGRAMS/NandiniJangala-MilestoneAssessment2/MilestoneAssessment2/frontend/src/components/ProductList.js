import React, { Component } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  state = { products: [] };

  componentDidMount() {
    axios.get("http://localhost:5000/products")
      .then(res => this.setState({ products: res.data }));
  }

  render() {
    return (
      <div className="container">
        {this.state.products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    );
  }
}

export default ProductList;