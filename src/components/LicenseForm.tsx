import {  reserves, weaponClasses, times, restrictions, ReserveName} from "../data/reserves";
import { useState } from "react";
import styles from "./LicenseForm.module.scss";

function getRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sexes = ["Male", "Female", "Any"] as const;

export default function LicenseForm() {
  const [selectedReserve, setSelectedReserve] = useState<ReserveName | null>(null);
  const [species, setSpecies] = useState("");
  const [tripDays, setTripDays] = useState(1);
  const [limit, setLimit] = useState(1);
  const [sex, setSex] = useState("");
  const [weapon, setWeapon] = useState("");
  const [shootingTime, setShootingTime] = useState("");
  const [restriction, setRestriction] = useState("");

  function generateLicenseData(reserveName: ReserveName) {
    const reserveData = reserves[reserveName];

    setSpecies(getRandom(reserveData.species));
    setTripDays(getRandomNumber(1, 7));
    setLimit(getRandomNumber(1, 5));
    setSex(getRandom(sexes));
    setWeapon(getRandom(weaponClasses));
    setShootingTime(getRandom(times));
    setRestriction(getRandom(restrictions));
  }

  function handleReserveSelection(reserveName: ReserveName) {
    setSelectedReserve(reserveName);
    generateLicenseData(reserveName);
  }

  function regenerateTag() {
    if (selectedReserve) {
      generateLicenseData(selectedReserve);
    }
  }

  if (!selectedReserve) {
    return (
      <div className={styles.container}>
        <h2>Select a Reserve</h2>
        <select 
          onChange={(e) => handleReserveSelection(e.target.value as ReserveName)} 
          defaultValue=""
          className={styles.selector}
        >
          <option value="" disabled>Choose a hunting reserve...</option>
          {Object.keys(reserves).map((key) => (
            <option key={key} value={key}>{reserves[key as ReserveName].label}</option>
          ))}
        </select>
      </div>
    );
  }

  const reserve = reserves[selectedReserve];

  return (
    <div className={styles.container}>
      <h2>{reserve.label}</h2>
      <p>
        You have acquired a tag for legally hunting within the <b>{reserve.label}</b> for the
        following:
      </p>
      <ul>
        <li><b>Trip Duration:</b> {tripDays} Day(s)</li>
        <li><b>Species:</b> {species}</li>
        <li><b>Limit:</b> {limit}</li>
        <li><b>Sex:</b> {sex}</li>
        <li><b>Weapon Class:</b> {weapon}</li>
        <li><b>Shooting Hours:</b> {shootingTime}</li>
        <li><b>Restrictions:</b> {restriction}</li>
      </ul>

      <div className={styles.buttonGroup}>
        <button onClick={regenerateTag}>Generate New Tag</button>
        <button onClick={() => setSelectedReserve(null)}>Change Reserve</button>
      </div>
    </div>
  );
}