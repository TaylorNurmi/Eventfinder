import React, { useState } from 'react';

const SearchForm = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(query);
        // Add code here to send query to backend and retrieve events
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
