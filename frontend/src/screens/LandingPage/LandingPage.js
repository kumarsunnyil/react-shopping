import { Button, Container, Row } from "react-bootstrap";

import "./LandingPage.css";

const LandingPage = () => {

//   useEffect(() => {
//     const userInfo = localStorage.getItem("userInfo");
//   if (userInfo) return;
//   history.push("/my-notes");
// }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to India</h1>
              <p className="subtitle">One place for all your needs</p>
            </div>
            <div className="button-container">
              <a href="./login"><Button variant="primary" size="lg" className="landing-button">Signin</Button></a>
              <a href="./register"><Button variant="outline-primary" size="lg" className="landing-button">Signup</Button></a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
