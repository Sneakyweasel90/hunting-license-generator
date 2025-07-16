import LicenseForm from "./components/LicenseForm";
import "./App.css";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="main">
      <h1 className="title">theHunter: Call of the Wild Tag Generator</h1>
      <Analytics />
      <LicenseForm />
    </div>
  );
}

export default App;
