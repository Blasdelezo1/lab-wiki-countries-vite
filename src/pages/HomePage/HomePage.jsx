import './HomePage.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function HomePage() {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => loadCountries(), [])

    const loadCountries = () => {

        axios
            .get("https://ih-countries-api.herokuapp.com/countries")
            .then(response => {
                setCountries(response.data)
                console.log('cuantos popinoes salen')              // en axios la respuesta del server está en .data
                setIsLoading(false)
            })
            .catch(err => console.log(err))

    }




    return (

        <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>

            <div>
                <h1>Country List with Links</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {countries.map(country => (
                            <li key={country.id}>
                                <Link to={`/country/${country.alpha3Code}`}>
                                    {country.name.common}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

    )
}


export default HomePage;

{/* <img src={`https://flagcdn.com/16x12/${country.cca2}.png`} alt={country.name.common} /> */ }
{/* <Link to="/ABW" className="list-group-item list-group-item-action">🇦🇼 Aruba</Link>
                <Link to="/AFG" className="list-group-item list-group-item-action">🇦🇫 Afghanistan</Link>
                <Link to="/AGO" className="list-group-item list-group-item-action">🇦🇴 Angola</Link>
                <Link to="/AIA" className="list-group-item list-group-item-action">🇦🇮 Anguilla</Link>
                <Link to="/ALA" className="list-group-item list-group-item-action">🇦🇽 Åland Islands</Link>
                <Link to="/ALB" className="list-group-item list-group-item-action">🇦🇱 Albania</Link>
                <Link to="/AND" className="list-group-item list-group-item-action">🇦🇩 Andorra</Link>
                <Link to="/ARE" className="list-group-item list-group-item-action">🇦🇪 United Arab Emirates</Link>
                <Link to="/ARG" className="list-group-item list-group-item-action">🇦🇷 Argentina</Link>
                <Link to="/ARM" className="list-group-item list-group-item-action">🇦🇲 Armenia</Link>
                <Link to="/ASM" className="list-group-item list-group-item-action">🇦🇸 American Samoa</Link>
                <Link to="/ATA" className="list-group-item list-group-item-action">🇦🇶 Antarctica</Link>
                <Link to="/FLK" className="list-group-item list-group-item-action">🇫🇰 Falkland Islands</Link>
                <Link to="/FRA" className="list-group-item list-group-item-action active">🇫🇷 France</Link>
                <Link to="/ZWE" className="list-group-item list-group-item-action">🇿🇼 Zimbabwe</Link> */}