import { Col, Row } from "react-bootstrap";
import { format as formatCurrency } from "../utils/currency";
import { useMemo } from "react";
import PurchaseListItem from "../components/PurchaseListItem";
import { FiChevronDown, FiFilter, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

function Dashboard(): JSX.Element {
  const formattedCurrency = useMemo(() => formatCurrency(8654.23), []);

  return (
    <div>
      <div className="summary p-2 py-4">
        <Row className="mb-5">
          <Col md={6} xs={6} className="d-flex flex-column ps-4">
            <span className="text-muted-primary">Hi</span>
            <span>John Doe</span>
          </Col>
          <Col
            md={6}
            xs={6}
            className="d-flex flex-column align-items-end pe-4 "
          >
            <span className="text-muted-primary">Membership</span>
            <span>Basic</span>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={6} className="d-flex flex-column ps-4">
            <span className="text-muted-primary">Monthly Spent</span>
            <span className="amount">{formattedCurrency}</span>
          </Col>
          <Col
            md={6}
            xs={6}
            className="d-flex flex-column align-items-end pe-4 "
          >
            <span className="text-muted-primary">Shopping</span>
            <span className="amount">48</span>
          </Col>
        </Row>
      </div>

      <div>
        <div className="search m-3 d-flex flex-row justify-content-between">
          <span>
            <FiFilter size={25} className="me-2" />
            <span>Today</span>
          </span>
          <span>
            <FiChevronDown />
          </span>
        </div>

        <PurchaseListItem
          title="Groceries"
          items={3}
          date="12th Feb 2024"
          billAmount={542.12}
        />

        <PurchaseListItem
          title="Baby Foods"
          items={7}
          date="13th Feb 2024"
          billAmount={1300.5}
        />
      </div>

      <Link className="floating-btn" to="/list/1">
        <FiPlus color="#fff" size={35} />
      </Link>
    </div>
  );
}

export default Dashboard;
