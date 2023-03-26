import React, { useState } from 'react';

const EventSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = async () => {
    // TODO: Implement search logic
    };

    return (
        <div>
            <h1>Event Search</h1>
            <input type="text" value={query} onChange={handleInputChange} />
            <button onClick={handleSearch}>Search</button>
            {results.map((result) => (
            <div key={result.id}>
                <h2>{result.name}</h2>
                <p>{result.date}</p>
                <p>{result.location}</p>
            </div>
            ))}
        </div>
    );
};

export default EventSearch;
