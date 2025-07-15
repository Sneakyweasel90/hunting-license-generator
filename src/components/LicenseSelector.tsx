import { reserves } from "../data/reserves";

export default function LicenseSelector({ onSelect }: { onSelect: (value: string) => void }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
      <option value="" disabled>Select a License</option>
      {Object.keys(reserves).map((key) => (
        <option key={key} value={key}>{key}</option>
      ))}
    </select>
  );
}
