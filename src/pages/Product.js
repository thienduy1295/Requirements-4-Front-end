import React, { useState } from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const { products } = props;
  console.log(products);
  const [imageReview, setImageReview] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState("");
  console.log(typeof price);

  const onAddProduct = () => {
    let newProduct = {};

    newProduct.id = products.length + 1;
    newProduct.productImage = file;
    newProduct.name = name;
    newProduct.price = parseInt(price);
    products.push(newProduct);
    alert("Product is added");
  };

  return (
    <div className="container">
      <h1>Demo Store</h1>
      <h3>Add Product</h3>
      <Link to="/">Continue Shopping?</Link>
      <table>
        <tbody>
          <tr>
            <td>Product Name:</td>
            <td>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Product Price:</td>
            <td>
              <input type="number" onChange={(e) => setPrice(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Product Image:</td>
            <td>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </td>
          </tr>
          <tr>
            <td>Product Image Review:</td>
            <td>
              <img
                id="imgPreview"
                src={imageReview}
                alt=""
                style={{ width: "400px" }}
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <button onClick={() => onAddProduct()}>Add Product</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Product;
