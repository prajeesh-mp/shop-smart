import { Col, Row } from "react-bootstrap";

function Dashboard(): JSX.Element {
  return (
    <div>
      <div className="summary">
        <Row>
          <Col md={6} xs={6}>
            <span>Hi</span>
            <span>John Doe</span>
          </Col>
          <Col md={6} xs={6}>
            <span>Hi</span>
            <span>John Doe</span>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={6}></Col>
          <Col md={6} xs={6}></Col>
        </Row>
      </div>
    </div>
  );
}

export default Dashboard;
