import AppBar from "../component/AppBar"
import { SearchProvider } from "../context/search.context"
import PropertySearch from "../component/search/PropertySearch"
import React from "react"

export default function SearchPage() {
    return (
        <>
            <AppBar/>
            <SearchProvider>
                <PropertySearch />
            </SearchProvider>
        </>
    )
}