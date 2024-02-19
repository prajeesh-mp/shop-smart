import { format as formatCurrency } from "../utils/currency";

interface Props {
  title: string;
  items: number;
  date: string;
  billAmount: number;
}

function PurchaseListItem({
  title,
  items,
  date,
  billAmount,
}: Props): JSX.Element {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center p-3">
      <div className="d-flex flex-row align-items-center">
        <div className="avatar" />
        <div className="d-flex flex-column ps-2">
          <span className="title">{title}</span>
          <span className="desc">
            {items} Items · {date}
          </span>
        </div>
      </div>
      <span className="bill">{formatCurrency(billAmount)}</span>
    </div>
  );
}

export default PurchaseListItem;
