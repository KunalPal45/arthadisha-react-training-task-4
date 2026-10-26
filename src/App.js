
import "./App.css";
import Invoice from "./components/Invoice";

const invoices = [
  {
    id: 1,
    client: {
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "9876543210",
      address: "Nashik, Maharashtra, India",
    },
    items: [
      { id: 1, name: "Website Development", quantity: 1, rate: 15000 },
      { id: 2, name: "UI/UX Design", quantity: 2, rate: 5000 },
    ],
  },
  {
    id: 2,
    client: {
      name: "Priya Patel",
      email: "priya@example.com",
      phone: "9876501234",
      address: "Pune, Maharashtra, India",
    },
    items: [
      { id: 1, name: "API Integration", quantity: 1, rate: 6000 },
      { id: 2, name: "Testing & Deployment", quantity: 1, rate: 3000 },
    ],
  },
];

function App() {
  return (
    <div className="invoices-page">
      {invoices.map((invoice) => (
        <Invoice key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
}

export default App;
