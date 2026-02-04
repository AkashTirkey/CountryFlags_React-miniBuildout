import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "./Styles/Country.module.css";

export default function Country() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://xcountries-backend.labs.crio.do/all")
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
         console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={Styles.grid}>
      {countries.map((country) => (
        <div className={Styles.gridItem} key={country.name}>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`} 
          />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}
