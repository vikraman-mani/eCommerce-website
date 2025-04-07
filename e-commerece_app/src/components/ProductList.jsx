import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductList = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "Get" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <section className="Products">
        {products.map((product) => {
          return (
            <Card style={{ width: "18rem" }} className="Product">
              <center>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "9rem", height: "12rem" }}
                />
              </center>

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{ overflow: "scroll", height: "100px" }}>
                  {product.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="cardFooter">
                <Card.Title> ${product.price}</Card.Title>
                <Button variant="primary">Add to Card</Button>
              </Card.Footer>
            </Card>
          );
        })}
      </section>
    </div>
  );
};

export default ProductList;
