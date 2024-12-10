import React, { useState } from 'react';
import FilterModal from './FilterModal';
import PropertyResults from "./PropertyResult";
import {useSearchState} from '../../context/search.context.js';
import {Container, TextField, Button, InputAdornment} from "@mui/material";

export default function PropertySearch() {
    const { state, dispatch } = useSearchState()
    const [open, setOpen] = useState(false) // State for modal dialog
    const [isLoading, setIsLoading] = useState(false) // State for results loading icon
    const [data, setData] = useState(null) // State for results loading icon

    const handleStateChange = (id, value) => {
        // Dispatch an action to update id value
        dispatch({ type: 'update', id: id, value: value });
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

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
            const response = await fetch('https://655b46c7ab37729791a8d390.mockapi.io/search/properties', {
                //method: 'POST', // Adjust the HTTP method as needed (e.g., 'GET', 'POST', etc.)
                method: 'GET', // Adjust the HTTP method as needed (e.g., 'GET', 'POST', etc.)
                headers: {
                    'Content-Type': 'application/json',
                },
                //body: payload, // Convert the object to JSON
            })

            if (response.ok) {
                const data = await response.json();
                console.log('Search results:', data);
                // Handle the received data as needed (e.g., display results on the UI)
                setData(data)
            } else {
                console.error('Error:', response.statusText);
                // Handle the error condition appropriately
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle any network or other errors
        }
        setIsLoading(false)
    }

    const FilterButton = () => (
        <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
            disabled={isLoading}
        >
            Filters
        </Button>
    )

    const SearchButton = () => (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            sx={{ m: 1 }}
        >
            Search
        </Button>
    )

    return (
        <Container maxWidth="lg" >
            <h1 style={{ textAlign: 'center' }}>Property Search</h1>
            <form onSubmit={handleSearchSubmit}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Suburb:"
                    value={state.suburb}
                    //onChange={handleSuburb}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <FilterButton />
                                <SearchButton />
                            </InputAdornment>
                        ),
                    }}
                />

            </form>
            <FilterModal open={open} setOpen={setOpen} handleStateChange={handleStateChange}/>

            {/* Display search results here */}
            <PropertyResults properties={data} isLoading={isLoading}/>
        </Container>
    )
}
