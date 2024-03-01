import { Col, Row } from "react-bootstrap";
import { FaCircleCheck } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";
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
          <h1 className="mb-3">
            Complete your <br /> Shopping in peace!
          </h1>

          <div className="d-flex flex-row align-items-center mb-2">
            <FaCircleCheck color="#42a32c" className="me-2" />
            <span>Write down your Shopping List</span>
          </div>

          <div className="d-flex flex-row align-items-center mb-2">
            <FaCircleCheck color="#42a32c" className="me-2" />
            <span>Buy only what you need</span>
          </div>

          <div className="d-flex flex-row align-items-center mb-2">
            <FaCircleCheck color="#42a32c" className="me-2" />
            <span>Stay within budget</span>
          </div>

          <div className="d-flex flex-row align-items-center mb-3">
            <FaCircleCheck color="#42a32c" className="me-2" />
            <span>Avoid forgetting items</span>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center mt-4 ">
          <img
            src="/assets/shop-smart-checklist.jpg"
            className="img-responsive"
            width={350}
            alt="Shop Smart - Create and Manage your purchase list"
          />
          <Link to="/dashboard" className="btn btn-primary w-75 mt-5">
            Get Started for Free !
          </Link>
          <span className="text-muted text-sm mt-2">
            No Credit Card required
          </span>
        </div>
      </Col>
    </Row>
  );
}

export default Welcome;
