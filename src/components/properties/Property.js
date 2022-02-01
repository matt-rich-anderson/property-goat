import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProperty } from "../ApiManager"

export const Property = () => {
    const { propertyId } = useParams()
    const [property, setProperty] = useState({})
    
    useEffect(()=>{
        getProperty(propertyId).then((data)=>setProperty(data))
    }
        ,[propertyId]
    )


    return(<>
        <section key={property.id}>
            <img src={property.imgUrl} alt="Property Image" width="600" />
            <h2>{property.address}</h2>
            <p>Square Feet: {property.sqrFoot}</p>
            <p>Bedroom: {property.bedroom}</p>
            <p>Bath: {property.bath}</p>
            <p>Pets Allowed: {property.petsAllowed ? "Yes" : "No"}</p>
            <h4>Owned By {property.ownerName}</h4>
        </section>
    </>)
} 
//     "id": 2,
//     "address": "6 Golden Leaf Place",
//     "bedroom": 2,
//     "bath": 2,
//     "sqrFoot": 2280,
//     "petsAllowed": true,
//     "ownerName": "Analiese Pierson",
//     "userId": 1,
//     "imgUrl": "https://res.cloudinary.com/dtiqyvglg/image/upload/v1643595770/Screenshot_2022-01-13_115803_hg4h9n.png"