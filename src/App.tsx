import LicenseForm from "./components/LicenseForm";
import "./App.css";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="main">
      <h1 className="title">Random Hunting License Generator</h1>
      <LicenseForm />
      <Analytics />
    </div>
  );
}

export default App;
