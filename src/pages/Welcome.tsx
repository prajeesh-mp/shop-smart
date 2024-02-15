import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Welcome(): JSX.Element {
  return (
    <Row>
      <Col>
        <div className="d-flex flex-column justify-content-center align-items-center my-4">
          <img
            src="/assets/icon.png"
            width={75}
            alt="Shop Smart - Create and Manage Purchase List"
          />
          <h4>Shop Smart</h4>
        </div>

        <div className="ps-4">
          <h1>
            Write down your <br /> shopping list!
          </h1>

          <p>
            Helps you buy only what you need,
            <br /> stay within budget, and avoid forgetting items
          </p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center mt-4">
          <img
            src="/assets/shop-smart-checklist.jpg"
            className="img-responsive"
            width={350}
          />
          <Link to="/dashboard" className="btn btn-primary w-75 mt-5">
            Get Started
          </Link>
        </div>
      </Col>
    </Row>
  );
}

export default Welcome;
