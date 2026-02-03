import React, { useState, useEffect } from "react";
import axios from 'axios'
import Styles from './Styles/Country.module.css'

export default function Country() {
    const [data, setData] = useState([]);
    const[loading, setLoading]=useState(true);
    const[error,setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://xcountries-backend.labs.crio.do/all");
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                console.log("Couldn't fetch the data", error)
                setError(true);
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    }, []) //this api will be mounted at the start of the application


    if(loading) return <p>Loading....</p>
    if(error) return <p>Something went wrong</p>;

    return (
        <>
            <div className={Styles.grid}>
                {data.map((country) => (
                    <div className={Styles.gridItem} key={country.name}>
                        <img src={country.flag} alt={`Flag of ${country.name}`} />
                        <p>{country.name}</p>

                    </div>
                ))}
            </div>
        </>
    )
}