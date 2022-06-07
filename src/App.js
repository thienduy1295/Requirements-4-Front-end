import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import data from "./data";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Products from "./pages/Products";

function App() {
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);
  // const [isAdded, setIsAdded] = useState(false);

  const onAddOrRemove = (product) => {
    const updateList = (isAdded) => {
      let copyProducts = products;
      copyProducts.find((p) => {
        return p.id === product.id;
      }).isAdded = isAdded;
    };
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      updateList(false);
      alert("Item is removed from cart.");
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      updateList(true);
      alert("Item is added to cart");
    }
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const updateList = (isAdded) => {
      let copyProducts = products;
      copyProducts.find((p) => {
        return p.id === product.id;
      }).isAdded = isAdded;
    };
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      updateList(false);
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <Routes>
      <Route
        index
        path="/"
        element={<Products products={products} onAddOrRemove={onAddOrRemove} />}
      ></Route>
      <Route
        index
        path="/product"
        element={<Product products={products} />}
      ></Route>
      <Route
        index
        path="/cart"
        element={
          <Cart cartItems={cartItems} onRemove={onRemove} onAdd={onAdd} />
        }
      ></Route>
    </Routes>
  );
}

export default App;
