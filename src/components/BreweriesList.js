import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const BreweriesList = () => {
    const { breweries, pageNumber, setPageNumber } = useGlobalContext();

    if (breweries.length < 1) {
        return <h2>no breweries matched your search criteria</h2>;
    }

    return (
        <section className="breweries-list-section">
            <h2>Breweries</h2>
            <ul>
                {breweries.map(({ id, name }, index) => (
                    <li key={index}>
                        <Link to={`/breweries/${id}`} style={{ color: '#000' }}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
            <button
                disabled={pageNumber === 1 ? true : false}
                className="btns-back-next"
                onClick={() => setPageNumber(pageNumber - 1)}
            >
                Back
            </button>
            <button
                disabled={pageNumber === 401 ? true : false}
                className="btns-back-next"
                onClick={() => setPageNumber(pageNumber + 1)}
                style={{ marginLeft: '20px' }}
            >
                Next
            </button>
        </section>
    );
};

export default BreweriesList;
