import { Col, Row } from "react-bootstrap";
import { formatCurrency } from "../utils/currency";
import { useEffect, useMemo, useState } from "react";
import PurchaseListItem from "../components/PurchaseListItem";
import { FiChevronDown, FiFilter, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Stores, getStoreData } from "../services/db.service";
import { List } from "../interfaces/List";
import { formatDate } from "../utils/date";

function Dashboard(): JSX.Element {
  const formattedCurrency = useMemo(() => formatCurrency(8654.23), []);
  const [lists, setLists] = useState<List[] | []>([]);

  // declare this async method
  const handleGetLists = async () => {
    const data = await getStoreData<List>(Stores.PurchaseLists);
    setLists(data);
  };

  useEffect(() => {
    handleGetLists();
  }, []);

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

        {lists &&
          lists.map((purchase) => (
            <PurchaseListItem
              title={purchase.name}
              items={3}
              date={formatDate(purchase.created_at)}
              billAmount={formatCurrency(542.12)}
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
