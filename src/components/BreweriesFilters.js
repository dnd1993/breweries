import React from 'react';

import SearchForm from './SearchForm';
import BreweriesTypes from './BreweriesTypes';

const BreweriesFilters = () => {
    return (
        <section className="filters-section">
            <SearchForm />
            <BreweriesTypes />
        </section>
    );
};

export default BreweriesFilters;
