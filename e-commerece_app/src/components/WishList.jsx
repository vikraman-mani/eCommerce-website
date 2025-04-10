import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { removeItem } from "../store/cartSlice";

const WishList = () => {
  // useSelector() ==> get details from store
  let selector = useSelector((state) => state.cart);

  let dispatch = useDispatch(); // to dispatch actions to redux store
  let handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h1>Product List</h1>

      <section className="Products">
        {selector.map((product) => {
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
                <Card.Text> ${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="cardFooter">
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
    </div>
  );
};

export default WishList;
