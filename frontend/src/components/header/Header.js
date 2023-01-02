import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Dropdown,
  Badge,
  Button
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

import { CartState } from "../../context/Context";
import "./Header.css";

function Header() {
  const {
    state: { cart },
    dispatch, 
    productDispatch,
  } = CartState();
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="navbar-component fixed-top " variant="dark" >
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
              />
            </Form>
          </Nav>
          <Nav className="me-auto navbar-component">
            <Nav.Link>
              <Link to="/shop">Shop Page</Link>
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg="danger cart-item-count mx-2"> {cart.length} </Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className="cartitem" key={prod.id}>
                        <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.name}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>₹ {prod.price.split(".")[0]}</span>
                        </div>
                       
                        <AiOutlineDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" , color:"red"}}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />

                        <Link to="/cart">
                        <Button style={{ width: "95%", margin: "0 10px" }}>
                          Go To Cart
                        </Button>
                      </Link>
                        
                      </span>
                    ))}
                    <NavDropdown.Divider />
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: "10" }} >Your Cart Is empty </span>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <NavDropdown title="Sunil Kumar">
              <NavDropdown.Item>My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  onClick={() => {
                    localStorage.removeItem("userInfo");
                    navigate("/");
                    console.log("Pushing to the home");
                  }}
                  to="/"
                >
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
