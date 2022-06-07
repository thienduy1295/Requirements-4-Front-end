import React from "react";
import { Link } from "react-router-dom";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  return (
    <div className="container">
      <h1>Demo Store</h1>
      <h3>Cart Details</h3>
      <Link to="/">Continue Shopping?</Link>
      <table className="cart-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 && (
            <tr>
              <td colSpan="3">No item in cart</td>
            </tr>
          )}
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img
                  src={
                    item.productImage ||
                    "https://www.washingtonpost.com/blogs/answer-sheet/files/2013/07/lesson-300x217.jpg"
                  }
                  alt=""
                />
              </td>
              <td>{item.name}</td>
              <td>$ {item.price}</td>
              <td> {item.qty}</td>
              <td>
                <button onClick={() => onAdd(item)}>+</button>{" "}
                <button onClick={() => onRemove(item)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total</td>
            <td>$ {cartItems.reduce((a, b) => a + b.price * b.qty, 0)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart;
