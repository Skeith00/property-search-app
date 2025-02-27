import React, { useState } from 'react';
import FilterModal from './FilterModal';
import PropertyResults from "./PropertyResult";
import {useSearchState} from '../../context/search.context.js';
import {Container, Box, TextField, Button, InputAdornment} from "@mui/material";

const FilterButton = ({ onClick, isLoading, activeFiltersCount }) => (
    <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        //onClick={() => setOpen(true)}
        disabled={isLoading}
    >
        Filters
        {activeFiltersCount > 0 && (
            <Box
                component="span"
                sx={{
                    ml: 1, // Add margin-left for spacing
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    color: (theme) => theme.palette.primary.main,
                    borderRadius: "50%",
                    width: 24,
                    height: 24,
                    fontSize: "0.875rem", // Adjust font size
                    fontWeight: "bold",
                }}
            >
                {activeFiltersCount}
            </Box>
        )}
    </Button>
)

const SearchButton = ({ isLoading }) => (
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

export default function PropertySearch() {
    const { state, dispatch } = useSearchState()
    const [open, setOpen] = useState(false) // State for modal dialog
    const [isLoading, setIsLoading] = useState(false) // State for results loading icon
    const [data, setData] = useState(null) // State for results loading icon

    const handleStateChange = (id, value) => {
        // Dispatch an action to update id value
        dispatch({ type: 'update', id: id, value: value });
    }

    const activeFiltersCount = Object.values(state).filter(
        (value) => value !== "" && value !== 0 && value !== null && value !== undefined
    ).length;

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
            const response = await fetch('/property/search', {
                //method: 'GET', // Adjust the HTTP method as needed (e.g., 'GET', 'POST', etc.)
                method: 'POST', // Adjust the HTTP method as needed (e.g., 'GET', 'POST', etc.)
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(searchFilters), // Convert the object to JSON
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

    return (
        <Container maxWidth="md" >
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
                                <FilterButton onClick={() => setOpen(true)} isLoading={isLoading} activeFiltersCount={activeFiltersCount} />
                                <SearchButton isLoading={isLoading} />
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
