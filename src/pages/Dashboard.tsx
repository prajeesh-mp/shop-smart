import { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import PurchaseListItem from "../components/PurchaseListItem";
import { formatCurrency } from "../utils/currency";
import { FiChevronDown, FiFilter, FiPlus } from "react-icons/fi";
import { Stores, getStoreData } from "../services/db.service";
import { List } from "../interfaces/List";
import { formatDate } from "../utils/date";

function Dashboard(): JSX.Element {
  const formattedCurrency = useMemo(() => formatCurrency(0), []);
  const [lists, setLists] = useState<List[] | []>([]);

  // declare this async method
  const handleGetLists = async () => {
    const data = (await getStoreData<List>(Stores.PurchaseLists)).reverse();

    setLists(data);
  };

  useEffect(() => {
    handleGetLists();
  }, []);

  return (
    <div>
      <div className="summary p-2 py-4">
        <Row className="mb-5 d-flex flex-row align-items-center">
          <Col md={6} xs={6} className="d-flex flex-column ps-4">
            <span>Hi, User</span>
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
            <span className="amount">{lists.length}</span>
          </Col>
        </Row>
      </div>

      <div>
        <div className="search m-3 d-flex flex-row justify-content-between">
          <span>
            <FiFilter size={25} className="me-2" />
            <span>All</span>
          </span>
          <span>
            <FiChevronDown />
          </span>
        </div>

        <span className="d-flex flex-row justify-content-end">
          <a href="https://forms.gle/fXHtiK66uQXnK9xz9">Feedback</a>
        </span>

        {lists &&
          lists.map((purchase) => (
            <PurchaseListItem
              key={purchase.id}
              id={purchase.id}
              title={purchase.name}
              items={3}
              date={formatDate(purchase.created_at)}
              billAmount={formatCurrency(purchase.total_amount || 0)}
            />
          ))}
      </div>

      <Link className="floating-btn" to="/list/1">
        <FiPlus color="#fff" size={35} />
      </Link>
    </div>
  );
}

export default Dashboard;
