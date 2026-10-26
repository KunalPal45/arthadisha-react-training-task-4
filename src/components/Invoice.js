
import { useState } from "react";

import CompanyHeader from "./CompanyHeader";
import ClientInfo from "./ClientInfo";
import InvoiceTable from "./InvoiceTable";
import InvoiceFooter from "./InvoiceFooter";

function Invoice({ invoice }) {
  const [items, setItems] = useState(invoice.items);
  const [taxState, setTaxState] = useState("Maharashtra");
  const [gstRate, setGstRate] = useState(18);

  const subtotal = items.reduce(
    (total, item) => total + item.quantity * item.rate,
    0
  );

  const gstAmount = subtotal * (gstRate / 100);

  const cgst =
    taxState === "Maharashtra" ? gstAmount / 2 : 0;

  const sgst =
    taxState === "Maharashtra" ? gstAmount / 2 : 0;

  const igst = taxState === "Other" ? gstAmount : 0;
  const grandTotal = subtotal + gstAmount;

  function updateItem(id, field, value) {
    setItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id
          ? { ...item, [field]: Math.max(0, Number(value) || 0) }
          : item
      )
    );
  }

  return (
    <main className="invoice-container">
      <CompanyHeader />

      <ClientInfo
        client={invoice.client}
        taxState={taxState}
        setTaxState={setTaxState}
        gstRate={gstRate}
        setGstRate={setGstRate}
      />

      <InvoiceTable items={items} updateItem={updateItem} />

      <InvoiceFooter
        subtotal={subtotal}
        gstRate={gstRate}
        taxState={taxState}
        cgst={cgst}
        sgst={sgst}
        igst={igst}
        grandTotal={grandTotal}
      />
    </main>
  );
}

export default Invoice;
