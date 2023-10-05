import React, { useState } from 'react';

const PropertySearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Implement your search logic here (e.g., make an API request).
        console.log('Searching for properties with term:', searchTerm);
    };

    return (
        <div>
            <h1>Property Search</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search for houses or apartments..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
            {/* Display search results here */}
        </div>
    );
};

export default PropertySearch;
