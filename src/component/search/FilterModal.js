import {Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText} from "@mui/material";
import {FormControl, MenuItem, Select} from "@mui/material";
import React, {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import {useSearchState} from '../../context/search.context.js';
import Button from "@mui/material/Button";

export default function FilterModal({open, setOpen }) {
    const { state: searchState, dispatch: searchDispatch } = useSearchState()

    const resetInputValues = () => {
        return {
            minBedrooms: searchState.minBedrooms,
            minBathrooms: searchState.minBathrooms,
            priceRange: searchState.priceRange
        }
    }

    const [localInputValues, setLocalInputValues] = useState(resetInputValues);

    useEffect(() => {
        setLocalInputValues(resetInputValues)
    }, [open])


    const handleInputChange = (name, value) => {
        setLocalInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const updateFilter = () => {
        // Create a JSON object to send to the API
        let minBedrooms = parseInt(localInputValues.minBedrooms)
        let minBathrooms = parseInt(localInputValues.minBathrooms)
        const payload = {
            minBedrooms: isNaN(minBedrooms) ? "" : minBedrooms,
            minBathrooms: isNaN(minBathrooms) ? "" : minBathrooms,
            priceRange: localInputValues.priceRange,
        };
        searchDispatch({ type: 'update', payload });
        setOpen(false)
    }

    const clearFilter = () => {
        searchDispatch({ type: 'delete'});
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Filter Properties</DialogTitle>
            <DialogContent>
                <DialogContentText>Use the filters below:</DialogContentText>
                <FormControl fullWidth>
                    <TextField
                        fullWidth
                        type="number"
                        label="Min Bedrooms"
                        value={localInputValues.minBedrooms}
                        InputProps={{ inputProps: { min: 1 } }}
                        onChange={(e) => handleInputChange('minBedrooms', e.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        fullWidth
                        type="number"
                        label="Min Bathrooms"
                        value={localInputValues.minBathrooms}
                        InputProps={{ inputProps: { min: 1 } }}
                        onChange={(e) => handleInputChange('minBathrooms', e.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <Select
                        value={localInputValues.priceRange}
                        onChange={(e) => handleInputChange('priceRange', e.target.value)}
                    >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="0-100000">$0 - $100,000</MenuItem>
                        <MenuItem value="100000-200000">$100,000 - $200,000</MenuItem>
                        <MenuItem value="200000-300000">$200,000 - $300,000</MenuItem>
                        {/* Add more options as needed */}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={updateFilter}
                    style={{ marginTop: '16px' }}
                >
                    Apply
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={clearFilter}
                    style={{ marginTop: '16px' }}
                >
                    Clear
                </Button>
            </DialogActions>
        </Dialog>
    );
}
