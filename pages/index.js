import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Components from "../components/Overview/components";
export default function index() {
  const [active, setActive] = useState(1);
  return (
    <Container className="divOverview">
      <Row>
        <Col lg={12}>
          <p className="pHeader">Navix Design System</p>
          <p className="pHeaderSub">
            Use quality end-to-end design language to create simple, intuitive
            and beautiful experiences.
          </p>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col lg={12}>
          <ul className="ulOverview">
            <li
              onClick={(e) => {
                setActive(1);
              }}
            >
              <a
                style={{
                  borderBottom: active === 1 ? "2px solid #05137C" : "",
                  color: active === 1 ? "#05137C" : "",
                }}
              >
                Get Started
              </a>
            </li>
            <li
              onClick={(e) => {
                setActive(2);
              }}
            >
              <a
                style={{
                  borderBottom: active === 2 ? "2px solid #05137C" : "",
                  color: active === 2 ? "#05137C" : "",
                }}
              >
                Branding
              </a>
            </li>
            <li
              onClick={(e) => {
                setActive(3);
              }}
            >
              <a
                style={{
                  borderBottom: active === 3 ? "2px solid #05137C" : "",
                  color: active === 3 ? "#05137C" : "",
                }}
              >
                Components
              </a>
            </li>
            <li
              onClick={(e) => {
                setActive(4);
              }}
            >
              <a
                style={{
                  borderBottom: active === 4 ? "2px solid #05137C" : "",
                  color: active === 4 ? "#05137C" : "",
                }}
              >
                Hooks
              </a>
            </li>
            <li
              onClick={(e) => {
                setActive(5);
              }}
            >
              <a
                style={{
                  borderBottom: active === 5 ? "2px solid #05137C" : "",
                  color: active === 5 ? "#05137C" : "",
                }}
              >
                Classes
              </a>
            </li>
          </ul>
          <hr style={{ marginTop: "-1px" }} />
        </Col>
      </Row>
      {(() => {
        if (active === 3) {
          return <Components />;
        }
      })()}
    </Container>
  );
}
