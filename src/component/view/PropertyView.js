import {useParams} from "react-router-dom";

export default function PropertyView() {
    // Access the userId parameter from the URL
    const { propertyId } = useParams();

    // Now you can use the userId variable in your component
    return (
        <div>
            <h2>Property ID: {propertyId}</h2>
            {/* Other component logic */}
        </div>
    )
}