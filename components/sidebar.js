import { Col, Container, Row } from "react-bootstrap";

export default function Sidebar() {
  return (
    <Container className="divSidebar">
      <Row>
        <Col lg={12}>
          <ul>
            <li>Overview</li>
            <li></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
