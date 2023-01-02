import React from "react";
import { Badge, Button, Card, Container } from "react-bootstrap";
import Rating from "../../components/Rating/RatingPage";
import { CartState } from "../../context/Context";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { id, name, image, price, fastDelivery, inStock, ratings } =
    props.product;
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Card className="product-listing">
      <Card.Img className="product-listing-image" variant="top" src={image} alt="this image" />
      <Card.Body>
        <Card.Subtitle style={{ paddingBottom: 5 }}>
          <div className="product-name">
            <span>{name}</span>
          </div>
          <div className="product--delivery-container">
            <span>₹ {price.split(".")[0]} </span>

            {fastDelivery ? (
              <span className="product-delivery mx-3 py-3">
                Fast Delivery{fastDelivery}
              </span>
            ) : (
              <span className="product-delivery mx-3 py-3">
                Delivery in 4 days{fastDelivery}
              </span>
            )}
          </div>
        </Card.Subtitle>
        <div className="product-quantity">
          <span>
            <Button variant="warning" className="product-increment-btn"> - </Button>
          </span>
          <span>0</span>
          <span>
            <Button variant="warning"> +</Button>
          </span>
        </div>
        <div>
          {" "}
          <Rating rating={ratings} /> 
        </div>
        {cart.some((p) => p.id === id) ? (
          <Button 
          onClick={()=>{
            dispatch({
              type:'REMOVE_FROM_CART',
              payload:props.product
            })
          }}
          className="py-1" variant="danger">
            Remove from Cart{" "}
          </Button>
        ) : (

          (inStock)?
          (<Button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: props.product,
              });
            }}
            className="py-1"
            disable={!inStock}
          >
            Add To Cart
          </Button>) :
          (<Button
  
            className=" py-1"
            disable={!inStock}
          >
            Add To WishList
          </Button>)
        )}
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
