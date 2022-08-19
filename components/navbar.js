import { Col, Container, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
export default function Navbar() {
  return (
    <Container fluid className="divNav">
      <Row className="align-items-center justify-content-center d-flex">
        <Col style={{ maxWidth: "150px" }}>
          <img
            src="Image/logo.png"
            className="img-fluid imgLogo"
            alt="Nav logo"
          ></img>
        </Col>
        <Col>
          <ul>
            <li>
              <a>Get Started</a>
            </li>
            <li>
              <a>Component</a>
            </li>
            <li>
              <a>Design System</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
          </ul>
        </Col>
        <Col style={{ maxWidth: "160px" }}>
          <button className="btnGithub">
            <i>
              <FaGithub />
            </i>
            Github
          </button>
        </Col>
      </Row>
    </Container>
  );
}
