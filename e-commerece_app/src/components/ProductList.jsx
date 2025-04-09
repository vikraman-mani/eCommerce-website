import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Atom } from "react-loading-indicators";
import useFetch from "./custom-hook/useFetch";

const ProductList = () => {
  // let [products, setProducts] = useState([]);
  // let [error, setError] = useState("");
  // let [isloading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:4000/products", { method: "Get" })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Something went wrong!");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  let { products, error, isloading } = useFetch(
    "http://localhost:4000/products"
  );

  if (isloading) {
    return (
      <div>
        <center>
          <Atom color="#32cd32" size="medium" text="Loading..." textColor="" />
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Product List</h1>

        <section className="Products">
          {products.map((product) => {
            return (
              <Card
                style={{ width: "18rem" }}
                className="Product"
                key={product.id}
              >
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

        {error && <p>{error}</p>}
      </div>
    );
  }
};

export default ProductList;
