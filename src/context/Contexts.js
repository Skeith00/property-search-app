import { createContext, useContext, useReducer } from 'react';

export const SearchContext = createContext('search')

export function SearchProvider({ children }) {

    const initialState = {
        suburb: "",
        minBedrooms: "",
        minBathrooms: "",
        priceRange: ""
    }

    function searchReducer(state, action) {
        switch (action.type) {
            case 'update': {
                return { ...state, ...action.payload };
            }
            case 'delete': {
                return initialState
            }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(searchReducer, initialState)

    return (
        <SearchContext.Provider value={{ state, dispatch }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearchState() {
    return useContext(SearchContext);
}

