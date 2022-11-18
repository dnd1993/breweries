import React from 'react';
import { useGlobalContext } from '../context';

const BreweriesTypes = () => {
    const { filterTypes, setBreweryType, setSearchTerm } = useGlobalContext();
    return (
        <section style={{ marginTop: '10px' }}>
            {filterTypes.map((type) => (
                <button
                    key={type}
                    className="brewery-types"
                    onClick={() => {
                        setSearchTerm('');
                        setBreweryType(type);
                    }}
                >
                    {type}
                </button>
            ))}
            <button className="btn-clear-filters" onClick={() => setBreweryType(null)}>
                clear
            </button>
        </section>
    );
};

export default BreweriesTypes;
