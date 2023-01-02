import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";

import { CartState } from "../../context/Context";
import Rating from "../Rating/RatingPage";
import "./CartPage.css";
import EmptyCart from "./EmptyCart";

const CartPage = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="cart-home">
      <div className="cart-product-container">
        {
          cart.length === 0 && 
          <EmptyCart />
        }
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              {prod.name}
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>

                <Form.Control
                  as="select"
                  className="cart-page-form-select"
                  value={prod.qty}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: prod.id,
                        qty: e.target.value,
                      },
                    })
                  }
                  >
                  {[...Array(prod.inStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                    ))}
                    </Form.Control>
                    <Col md={2}>
                    <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                    >
                    <AiOutlineDelete fontSize="20px"
                    style={{ cursor: "pointer" , color:"red"}}
                  
                  />
                </Button>
                <Col md={2}>
                <Rating rating={prod.ratings} />
              </Col>
              </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="cart-home-sidebar cart-summary">
        <span class="title">Subtotal({cart.length} items) </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
