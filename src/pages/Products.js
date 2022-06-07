import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Products(props) {
  const { products, onAddOrRemove } = props;

  return (
    <div>
      <h1>Demo Store</h1>
      <h3>Products</h3>
      <Link to={"/cart"}>
        <button>Checkout</button>
      </Link>
      <Link to="/product">
        <button>New Product</button>
      </Link>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddOrRemove={onAddOrRemove}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
