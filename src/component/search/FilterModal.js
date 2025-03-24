import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControl,
    IconButton,
    MenuItem,
    Select,
    Stack,
    TextField
} from "@mui/material";
import React, {useEffect, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {useSearchState} from '../../context/search.context.js';

export default function FilterModal({open, setOpen }) {
    const { state, dispatch } = useSearchState()

    const resetInputValues = () => {
        return {
            minBedrooms: state.minBedrooms || "",
            minBathrooms: state.minBathrooms || "",
            priceRange: state.priceRange || "",
        }
    }

    const [localInputValues, setLocalInputValues] = useState(resetInputValues);

    useEffect(() => {
        setLocalInputValues(resetInputValues)
    }, [open, state])

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
        dispatch({ type: 'update', payload });
        setOpen(false)
    }

    const clearFilter = () => {
        dispatch({ type: 'delete'});
    }

    const handleClose = () => setOpen(false);

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle
                sx={{
                    textAlign: "center", // Centers the title text
                }}
            >Filter Properties
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.primary.main,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {/*<DialogContentText>Use the filters below:</DialogContentText>*/}
                <FormControl fullWidth sx={{ mb: 1, mt: 2 }}>
                    <TextField
                        fullWidth
                        type="number"
                        label="Min Bedrooms"
                        value={localInputValues.minBedrooms}
                        InputProps={{ inputProps: { min: 1 } }}
                        onChange={(e) => handleInputChange('minBedrooms', e.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 1 }}>
                    <TextField
                        fullWidth
                        type="number"
                        label="Min Bathrooms"
                        value={localInputValues.minBathrooms}
                        InputProps={{ inputProps: { min: 1 } }}
                        onChange={(e) => handleInputChange('minBathrooms', e.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 1 }}>
                    <Select
                        label="Price Range"
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
                <Stack direction="row" spacing={2} sx={{ width: '100%', justifyContent: 'flex-end' }}>
                    <span
                        onClick={clearFilter}
                        style={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            color: 'blue',
                            marginTop: '16px',
                            textAlign: 'right',
                        }}
                    >
                        Clear all filters
                    </span>
                    <Button
                        variant="contained"
                        color="primary"
                        //fullWidth
                        onClick={updateFilter}
                        style={{ marginTop: '16px' }}
                    >
                        Apply
                    </Button>
                </Stack>
            </DialogActions>
        </Dialog>
    );
}
