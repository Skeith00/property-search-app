import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FilterModal from './FilterModal';
import {useSearchState} from '../context/Contexts.js';

function PropertySearch() {
    const { state, dispatch } = useSearchState();
    const [open, setOpen] = useState(false); // State for modal dialog

    const handleStateChange = (id, value) => {
        // Dispatch an action to update id value
        dispatch({ type: 'update', id: id, value: value });
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();

        // Create a JSON object to send to the API
        const searchFilters = {
            suburb: state.suburb,
            minBedrooms: parseInt(state.minBedrooms), // Parse to integer
            minBathrooms: parseInt(state.minBathrooms), // Parse to integer
            priceRange: state.priceRange,
        };

        // Perform API request with the searchFilters data
        try {
            let payload = JSON.stringify(searchFilters)
            console.log(payload)
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST', // Adjust the HTTP method as needed (e.g., 'GET', 'POST', etc.)
                headers: {
                    'Content-Type': 'application/json',
                },
                body: payload, // Convert the object to JSON
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Search results:', data);
                // Handle the received data as needed (e.g., display results on the UI)
            } else {
                console.error('Error:', response.statusText);
                // Handle the error condition appropriately
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle any network or other errors
        }
    };

    return (
        <Container maxWidth="md">
            <h1 style={{ textAlign: 'center' }}>Property Search</h1>
            <form onSubmit={handleSearchSubmit}>
                <TextField
                    fullWidth
                    label="Suburb:"
                    value={state.suburb}
                    //onChange={handleSuburb}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(true)}
                    style={{ marginTop: '16px' }}
                >
                    Open Filters
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '16px' }}
                >
                    Search
                </Button>
            </form>
            {/* Display search results here */}
            <FilterModal open={open} setOpen={setOpen} handleStateChange={handleStateChange}/>
        </Container>
    )
}

export default PropertySearch;
