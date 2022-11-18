import React, { useState, useContext, useEffect, useCallback } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [breweries, setBreweries] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [breweryType, setBreweryType] = useState(null);


    const filterTypes = [
        'micro',
        'nano',
        'regional',
        'brewpub',
        'large',
        'planning',
        'bar',
        'contract',
        'closed',
    ];

    const buildURL = useCallback(() => {
        let isFilterApplied = false;
        let url = 'https://api.openbrewerydb.org/breweries';
        if (pageNumber > 1) {
            url = `${url}?page=${pageNumber}`;
            isFilterApplied = true;
        }
        if (searchTerm !== '') {
            url = `${url}${isFilterApplied ? '&' : '?'}by_name=${searchTerm}`;
            isFilterApplied = true;
        }
        if (breweryType) {
            url = `${url}${isFilterApplied ? '&' : '?'}by_type=${breweryType}`;
            isFilterApplied = true;
        }
        return url;
    }, [pageNumber, searchTerm, breweryType]);


    useEffect(() => {
        const getBreweries = async () => {
            try {
                const response = await fetch(buildURL());
                const data = await response.json();
                setBreweries(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        getBreweries();
    }, [buildURL]);

    return (
        <AppContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                breweries,
                setBreweries,
                pageNumber,
                setPageNumber,
                setBreweryType,
                filterTypes,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
