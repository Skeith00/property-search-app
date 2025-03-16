import AppBar from "../component/AppBar"
import React from "react"
import PropertyView from "../component/view/PropertyView"
import {useParams} from "react-router-dom";

export default function ViewPage() {

    // Access the userId parameter from the URL
    const { propertyId } = useParams();

    // Sample property data
    const property = {
        title: "Luxury Beachfront Villa",
        price: 1250000,
        address: "123 Ocean Drive, Miami, FL",
        image: "https://source.unsplash.com/800x600/?house",
        bedrooms: 4,
        bathrooms: 3,
        size: 3500,
        description: "Stunning beachfront villa with modern design, ocean views, and luxury finishes.",
    };

    return (
        <>
            <AppBar/>
            <PropertyView property={property} />;
        </>
    )

}