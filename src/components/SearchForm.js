import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { searchTerm, setSearchTerm, setPageNumber } = useGlobalContext();
    const searchValue = React.useRef('');
    useEffect(() => {
        searchValue.current.focus();
    }, []);
    const searchBrewery = () => {
        setPageNumber(1);
        const formattedUserInput = searchValue.current.value.toLowerCase().replaceAll(' ', '_');
        setSearchTerm(formattedUserInput);
    };
    return (
        <section>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name" style={{ marginRight: '5px' }}>
                        Search your favorite brewery
                    </label>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        autoComplete="off"
                        ref={searchValue}
                        // value={searchTerm}
                        onChange={searchBrewery}
                    />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
