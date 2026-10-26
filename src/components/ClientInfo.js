
function ClientInfo({
  client,
  taxState,
  setTaxState,
  gstRate,
  setGstRate,
}) {
  return (
    <div className="client-tax-row">
      <section className="client-section">
        <h3>Bill To</h3>
        <p><strong>{client.name}</strong></p>
        <p>{client.email}</p>
        <p>{client.phone}</p>
        <p>{client.address}</p>
      </section>

      <div className="tax-settings">
        <div className="form-group">
          <label htmlFor="taxState">State</label>
          <select
            id="taxState"
            value={taxState}
            onChange={(event) => setTaxState(event.target.value)}
          >
            <option value="Maharashtra">Maharashtra</option>
            <option value="Other">Other State</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gstRate">GST Rate</label>
          <select
            id="gstRate"
            value={gstRate}
            onChange={(event) => setGstRate(Number(event.target.value))}
          >
            <option value={3}>3%</option>
            <option value={6}>6%</option>
            <option value={9}>9%</option>
            <option value={12}>12%</option>
            <option value={15}>15%</option>
            <option value={18}>18%</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ClientInfo;
