function PurchaseList(): JSX.Element {
  return (
    <div className="purchase">
      <div className="p-3">
        <span className="avatar"></span>
        <span>Hi, John</span>

        <h2 className="mt-4">
          Write down your <br /> shopping list!
        </h2>
        <p>
          Helps you buy only what you need, <br />
          stay within budget, and avoid forgetting items
        </p>
      </div>

      <div className="items mt-5 p-4">
        <div className="items-top d-flex flex-row justify-content-between align-items-center">
          <h2 className="title">Write down</h2>
          <span className="desc">3 Items</span>
        </div>

        <div className="item d-flex flex-row justify-content-between">
          <input type="text" className="w-100" />
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}

export default PurchaseList;
