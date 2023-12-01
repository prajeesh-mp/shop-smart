function Template() {
  return (
    <div className="border rounded p-2 px-3 justify-content-center align-items-center my-3">
      <h5>Kid's Shopping</h5>

      <div className="d-flex flex-row justify-content-between align-items-center">
        <p>Raagi</p>
        <p className="text-muted">Kg</p>
      </div>

      <div className="d-flex flex-row justify-content-between align-items-center">
        <p>Milk Powder</p>
        <p className="text-muted">Kg</p>
      </div>

      <div className="d-flex flex-row justify-content-between align-items-center">
        <p>Milk Powder</p>
        <p className="text-muted">Kg</p>
      </div>

      <hr />
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary btn-sm">use this template</button>
      </div>
    </div>
  );
}

export default Template;
