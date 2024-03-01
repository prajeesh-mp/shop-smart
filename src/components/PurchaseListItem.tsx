import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  items: number;
  date: string;
  billAmount: string;
}

function PurchaseListItem({
  id,
  title,
  items,
  date,
  billAmount,
}: Props): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div
      className="d-flex flex-row justify-content-between align-items-center p-3 hand"
      onClick={handleClick}
    >
      <div className="d-flex flex-row align-items-center">
        <div className="avatar" />
        <div className="d-flex flex-column ps-2">
          <span className="title">{title}</span>
          <span className="desc">
            {items} Items · {date}
          </span>
        </div>
      </div>
      <span className="bill">{billAmount}</span>
    </div>
  );
}

export default PurchaseListItem;
