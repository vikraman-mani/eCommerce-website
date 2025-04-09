import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Atom } from "react-loading-indicators";
import useFetch from "./custom-hook/useFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

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

  let { products, error, isloading, setProducts } = useFetch(
    "http://localhost:4000/products"
  );

  let navigate = useNavigate();

  let handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:4000/products/${id}`).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }

      // show updated product list on UI after deleted
      let newProductList = products.filter((product) => product.id !== id);
      setProducts(newProductList);
    });
  };

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
                  {/* <Card.Text style={{ overflow: "scroll", height: "100px" }}>
                    {product.description}
                  </Card.Text> */}
                  <Card.Text> ${product.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="cardFooter">
                  <Button variant="primary">Add to Card</Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      navigate(`/updateProduct/${product.id}`);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                  >
                    Delete
                  </Button>
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
