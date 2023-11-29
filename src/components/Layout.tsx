import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Template from "./Template";

function Layout() {
  return (
    <Container className="py-3">
      <h1 className="text-center">Shop Smart 🛒</h1>
      <Row className="">
        <Col xs={12} md={8}>
          <Outlet />
        </Col>
        <Col xs={12} md={4}>
          <h2>Templates</h2>
          <Template />
          <Template />
          <h2>Purchase Lists</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
