function Template() {
  return (
    <div className="border rounded p-2 px-3 justify-content-center align-items-center my-3">
      <h4>Kid's Shopping</h4>

      <h5>Groceries</h5>

      <div className="d-flex flex-row justify-content-between align-items-center">
        <p>Mushroom</p>
        <p className="text-muted">250 gm</p>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <p>Banana</p>
        <p className="text-muted">500 gm</p>
      </div>

      <h5>Baby Care</h5>

      <div className="d-flex flex-row justify-content-between align-items-center">
        <p>Diaper</p>
        <p className="text-muted">5 pcs</p>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <p>Milk Bottle</p>
        <p className="text-muted">1 pcs</p>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary btn-sm">use this template</button>
      </div>
    </div>
  );
}

export default Template;
