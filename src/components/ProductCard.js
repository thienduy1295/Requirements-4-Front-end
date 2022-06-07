import React from "react";

function ProductCard(props) {
  const { product, onAddOrRemove } = props;

  return (
    <div className="product-card">
      <div className="card-header">
        {product.name} - $ {product.price}
      </div>
      <div className="card-body">
        <img
          src={
            product.productImage ||
            "https://www.washingtonpost.com/blogs/answer-sheet/files/2013/07/lesson-300x217.jpg"
          }
          alt=""
        />
      </div>
      <div className="card-footer">
        <button
          className={product.isAdded ? "remove" : "add"}
          value={product.id}
          onClick={() => onAddOrRemove(product)}
        >
          {product.isAdded ? "Remove" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
