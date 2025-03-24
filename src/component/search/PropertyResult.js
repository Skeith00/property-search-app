import * as React from "react";
import PropertyCard from "./PropertyCard";
import LoadingSpinner from "../LoadingSpinner";

export default function PropertyResults({properties, isLoading}) {

    const transformProperty = (property) => {
        // TODO: transforms BE object into our FE model
        return property
    }

    const renderProperties = (properties) => {
        let cards = 'No Results'
        if (properties == null) {
            cards = ''
        } else if(properties.length > 0) {
            cards = properties.map(property => {
                return <PropertyCard key={property.id} property={transformProperty(property)}/>
            })
        }
        return cards
    }

    return (
        <>
            {isLoading ? <LoadingSpinner /> : renderProperties(properties) }
        </>
    )
}