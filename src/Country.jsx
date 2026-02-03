import React, { useState, useEffect } from "react";
import axios from 'axios'
import Styles from './Styles/Country.module.css'

export default function Country() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://xcountries-backend.labs.crio.do/all");
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                console.log("Couldn't fetch the data", error)
            }
        }
        fetchData();
    }, []) //this api will be mounted at the start of the application

    return (
        <>
            <div className={Styles.grid}>
                {data.map((country) => (
                    <div className={Styles.gridItem} key={country.name}>
                        <img src={country.flag} alt={country.name} />
                        <p>{country.name}</p>

                    </div>
                ))}
            </div>
        </>
    )
}