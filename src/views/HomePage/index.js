import React from 'react';

import BreweriesFilters from '../../components/BreweriesFilters';
import BreweriesList from '../../components/BreweriesList';

const HomePage = () => {
    return (
        <section className="home-page-section">
            <BreweriesFilters />
            <BreweriesList />
        </section>
    );
};

export default HomePage;
