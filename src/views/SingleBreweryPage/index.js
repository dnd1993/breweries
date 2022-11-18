import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

const SingleBrewery = () => {
    const { id } = useParams();
    const [brewery, setBrewery] = useState(null);

    let history = useHistory();

    const handleExceptions = (response) => {
        if (response.status === 404) history.push('/not-found');
        if (response.status === 400) history.push('/bad-request');
    };

    useEffect(() => {
        const getBrewery = async () => {
            try {
                const response = await fetch(`https://api.openbrewerydb.org/breweries/${id}`);
                handleExceptions(response);
                const data = await response.json();
                setBrewery(data);
            } catch (error) {
                console.error(error);
            }
        };
        getBrewery();
    }, [id]);
    return (
        <>
            {brewery && (
                <section className="brewery-details-section">
                    <h2>{brewery.name}</h2>
                    <div>
                        <div>
                            <p>
                                <span className="brewery-data">name: </span>
                                {brewery.name}
                            </p>
                            <p>
                                <span className="brewery-data">brewery type: </span>
                                {brewery.brewery_type}
                            </p>
                            <p>
                                <span className="brewery-data">street: </span>
                                {brewery.street}
                            </p>
                            <p>
                                <span className="brewery-data">city: </span>
                                {brewery.city}
                            </p>
                            <p>
                                <span className="brewery-data">state: </span>
                                {brewery.state}
                            </p>
                            <p>
                                <span className="brewery-data">country: </span>
                                {brewery.country}
                            </p>
                            <p>
                                <span className="brewery-data">phone: </span>
                                {brewery.phone}
                            </p>
                            <p>
                                <span className="brewery-data">website: </span>
                                {brewery.website_url}
                            </p>
                        </div>
                    </div>
                    <Link to="/" className="btn-back-home">
                        Back Home
                    </Link>
                </section>
            )}
        </>
    );
};

export default SingleBrewery;
