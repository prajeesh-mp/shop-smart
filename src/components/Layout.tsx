import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Template from "./Template";

function Layout() {
  return (
    <Container className="py-3">
      <h1 className="text-center">Shop Smart 🛒</h1>
      {/* <Outlet /> */}
      <Row className="">
        <Col xs={12} md={8}>
          Purchase List
        </Col>
        <Col xs={12} md={4}>
          <Template />
          <Template />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
